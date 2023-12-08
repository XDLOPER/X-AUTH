import store from '../index.js'
import {_setLoading} from './index.js'

export const setLoading = value => store.dispatch(_setLoading(value))
