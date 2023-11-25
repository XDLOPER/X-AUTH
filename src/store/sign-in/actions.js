import store from '../index.js'
import {_setStep} from './index.js'

export const setStep = value => store.dispatch(_setStep(value))
