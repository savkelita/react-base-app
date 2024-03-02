import * as Api from './api'

export type Loading = { type: 'Loading' }
export type Loaded = { type: 'Loaded'; data: { posts: Api.Post[] } }
export type Error = { type: 'Error'; error: Api.ErrorReport }

export type State = Loading | Loaded | Error

type Action =
  | { type: 'LoadingPosts' }
  | { type: 'ReceivePosts'; data: Api.Post[] }
  | { type: 'Error'; error: Api.ErrorReport }

export const INITIAL_STATE: State = { type: 'Loading' }

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LoadingPosts':
      return { type: 'Loading' }
    case 'ReceivePosts':
      return { type: 'Loaded', data: { posts: action.data } }
    case 'Error':
      return { type: 'Error', error: action.error }
    default: {
      console.warn('Invalid action: ', action)
      return state
    }
  }
}
