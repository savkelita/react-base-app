import axios, { isAxiosError } from 'axios'
import { pipe, flow } from 'fp-ts/function'
import { failure } from 'io-ts/lib/PathReporter'
import { NonEmptyArray, head } from 'fp-ts/lib/NonEmptyArray'
import { EmptyString } from '../io-extra'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import * as io from 'io-ts'

const ioSeverity = io.keyof({ ERROR: null, WARNING: null })
export type Severity = io.TypeOf<typeof ioSeverity>

export const ioBusinessError = io.type({
  code: io.string,
  message: io.string,
  type: io.literal('BUSINESS'),
})
export type BusinessError = io.TypeOf<typeof ioBusinessError>

export const ioSystemError = io.type({
  code: io.string,
  message: io.string,
  type: io.literal('SYSTEM'),
})
export type SystemError = io.TypeOf<typeof ioSystemError>

export const ioError = io.union([ioBusinessError, ioSystemError])
export type Error = io.TypeOf<typeof ioError>

export type ErrorReport = { content: string }

// TODO: Write a funciton for different status codes;
export const reportValidationErrors = (errors: NonEmptyArray<Error>): ErrorReport => {
  const printValidationError = (error: Error): string => error.message
  const content = pipe(errors, head, printValidationError)

  return { content }
}

export const decoderFromCodec = <a>(codec: io.Type<a, any, unknown>) =>
  flow(
    codec.decode,
    E.mapLeft(errors => failure(errors).join('\n\n')),
  )

export const noContentCodec = new io.Type(
  'NoContent',
  io.void.is,
  (u, c) =>
    pipe(
      EmptyString.validate(u, c),
      E.map(() => undefined),
    ),
  () => ({}),
)

export const get = <Request>(url: string, codec: io.Type<Request>): TE.TaskEither<ErrorReport, Request> =>
  pipe(
    TE.tryCatch(
      () => axios.get<Request>(url),
      error => {
        if (isAxiosError(error)) {
          const code = error.response ? `- Code: ${error.response.status}` : ''
          return { content: `Unexpected Server Error ${code}` }
        }
        return { content: `Unexpected Server Error` }
      },
    ),
    TE.chain(response =>
      pipe(
        codec.decode(response.data),
        E.mapLeft((errors: io.Errors) => {
          console.error(failure(errors).join('\n\n'))
          return { content: `Unexpected response from the Server` }
        }),
        TE.fromEither,
      ),
    ),
  )

export const post = <Request, Response>(
  url: string,
  request: Request,
  codec: io.Type<Response, any, unknown>,
): TE.TaskEither<ErrorReport, Response> =>
  pipe(
    TE.tryCatch(
      () => axios.post<Request>(url, request),
      error => {
        if (isAxiosError(error)) {
          const code = error.response ? `- Code: ${error.response.status}` : ''
          return { content: `Unexpected Server Error ${code}` }
        }
        return { content: `Unexpected Server Error` }
      },
    ),
    TE.chain(response =>
      pipe(
        codec.decode(response.data),
        E.mapLeft((errors: io.Errors) => {
          console.error(failure(errors).join('\n\n'))
          return { content: `Unexpected Server Error` }
        }),
        TE.fromEither,
      ),
    ),
  )
