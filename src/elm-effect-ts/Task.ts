import { Effect, Option, Either } from 'effect'
import { of } from 'rxjs'
import { Cmd } from './Cmd'

export function perform<A, Msg>(f: (a: A) => Msg): (t: Effect.Effect<A>) => Cmd<Msg> {
  return t => of(Effect.map(t, a => Option.some(f(a))))
}

export function attempt<A, E, Msg>(
  f: (e: Either.Either<A, E>) => Msg,
): (task: Effect.Effect<Either.Either<A, E>>) => Cmd<Msg> {
  return perform(f)
}
