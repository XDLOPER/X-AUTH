import store from '../index.js'
import {_setDataSignUp,_setDataSignIn,_setStep} from './index.js'

export const setDataSignUp = value => store.dispatch(_setDataSignUp(value))
export const setDataSignIn = value => store.dispatch(_setDataSignIn(value))
export const setStep = value => store.dispatch(_setStep(value))
