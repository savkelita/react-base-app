import { Effect, Option } from 'effect'
import { Observable, map as RxMap, merge, EMPTY } from 'rxjs'

export type Cmd<Msg> = Observable<Effect.Effect<Option.Option<Msg>>>

export function map<A, Msg>(f: (a: A) => Msg): (cmd: Cmd<A>) => Cmd<Msg> {
  return cmd => cmd.pipe(RxMap(t => Effect.map(t, o => Option.map(o, f))))
}

export function batch<Msg>(arr: Array<Cmd<Msg>>): Cmd<Msg> {
  return merge(...arr)
}

export const none: Cmd<never> = EMPTY
