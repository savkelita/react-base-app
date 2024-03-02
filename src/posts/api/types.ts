import * as io from 'io-ts'

export const ioPost = io.type({
  id: io.number,
  title: io.string,
  body: io.string,
  userId: io.number,
})
export type Post = io.TypeOf<typeof ioPost>

export const ioCreatePostCmd = io.type({
  title: io.string,
  body: io.string,
  userId: io.number,
})
export type CreatePostCmd = io.TypeOf<typeof ioCreatePostCmd>
