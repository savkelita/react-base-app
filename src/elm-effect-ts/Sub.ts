import { Observable, map as RxMap, merge, EMPTY } from 'rxjs'

export type Sub<Msg> = Observable<Msg>

export function map<A, Msg>(f: (a: A) => Msg): (sub: Sub<A>) => Sub<Msg> {
  return sub => sub.pipe(RxMap(f))
}

export function batch<Msg>(arr: Array<Sub<Msg>>): Sub<Msg> {
  return merge(...arr)
}

export const none: Sub<never> = EMPTY
