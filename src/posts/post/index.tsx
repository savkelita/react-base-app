import React, { memo } from 'react'
import { Text, Title1, makeStyles, shorthands } from '@fluentui/react-components'
import { MessageBarComponent } from '../../common/components'
import { Post } from '../api'

type Posts = Post[]
type Props = { data: Posts }

export const PostComponent: React.FunctionComponent<Props> = memo(({ data }) => {
  const { root, rootPosts } = useStyles()

  return (
    <div className={root}>
      <Title1>Posts</Title1>
      {data.length ? (
        <div className={rootPosts}>
          {data.slice(0, 10).map(post => (
            <Text key={post.id}>
              {post.id} &bull; {post.title}
            </Text>
          ))}
        </div>
      ) : (
        <MessageBarComponent intent="info" content="No posts" />
      )}
    </div>
  )
})

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f5f5',
    ...shorthands.borderRadius('10px'),
    ...shorthands.padding('10px'),
  },
  rootPosts: {
    display: 'flex',
    flexDirection: 'column',
  },
})
