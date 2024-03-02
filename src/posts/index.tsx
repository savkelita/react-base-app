import React, { useEffect, useReducer, useMemo } from 'react'
import * as Api from './api'
import * as E from 'fp-ts/lib/Either'
import { reducer, INITIAL_STATE } from './reducer'
import { MessageBarComponent, SpinnerComponent } from '../common/components'
import { makeStyles, shorthands } from '@fluentui/react-components'
import { PostComponent } from './post'

export const PostsComponent: React.FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const { root } = useStyles()

  useEffect(() => {
    Api.getPosts().then(
      E.fold(
        error => dispatch({ type: 'Error', error }),
        data => dispatch({ type: 'ReceivePosts', data }),
      ),
    )
  }, [])

  const renderView = useMemo(() => {
    switch (state.type) {
      case 'Loading':
        return <SpinnerComponent label="Loading posts..." />
      case 'Loaded':
        return <PostComponent data={state.data.posts} />
      case 'Error':
        return <MessageBarComponent intent="error" content={state.error.content} />
    }
  }, [state])

  return <div className={root}>{renderView}</div>
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    ...shorthands.padding('10px'),
  },
})
