import * as t from './types'
import { get } from '../../common/api'

export const getRequest = get('/api/getsomething', t.ioData)
// export const postRequest = post()
