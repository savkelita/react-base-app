import * as io from 'io-ts'

export const maybe = <RT extends io.Any>(
  type: RT,
  name?: string,
): io.UnionType<Array<RT | typeof io.null>, io.TypeOf<RT> | null> => io.union([type, io.null], name)
export interface EmptyStringBrand {
  readonly EmptyString: unique symbol
}
export const EmptyString = io.brand(
  io.string,
  (s): s is io.Branded<string, EmptyStringBrand> => s === '',
  'EmptyString',
)
export type EmptyString = io.TypeOf<typeof EmptyString>
interface EmptyBrand {
  readonly EmptyObject: unique symbol
}
export const EmptyObject = io.brand(
  io.UnknownRecord,
  (n): n is io.Branded<Record<string, never>, EmptyBrand> => Object.keys(n).length === 0,
  'EmptyObject',
)
type EmptyObject = io.TypeOf<typeof EmptyObject>
