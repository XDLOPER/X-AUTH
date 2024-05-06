import store from '../index.js'
import {_setDataSignUp,_setDataSignIn,_setPage} from './index.js'

export const setDataSignUp = value => store.dispatch(_setDataSignUp(value))
export const setDataSignIn = value => store.dispatch(_setDataSignIn(value))
export const setPage = value => store.dispatch(_setPage(value))
