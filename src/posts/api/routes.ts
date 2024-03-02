import * as t from './types'
import * as io from 'io-ts'
import { get, post } from '../../common/api'

export const getPosts = get('/posts', io.array(t.ioPost))
export const createPost = post('/posts', t.ioCreatePostCmd, t.ioPost)
