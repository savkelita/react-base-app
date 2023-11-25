import * as io from 'io-ts'

export const ioData = io.type({
  foo: io.string,
  baz: io.string,
  bar: io.string,
})
export type Data = io.TypeOf<typeof ioData>
