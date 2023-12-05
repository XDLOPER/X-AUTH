import store from '../index.js'
import {_setButtonBack,_setButtonNext,_setButtonSubmit} from './index.js'

export const setButtonBack = value => store.dispatch(_setButtonBack(value))
export const setButtonNext = value => store.dispatch(_setButtonNext(value))
export const setButtonSubmit = value => store.dispatch(_setButtonSubmit(value))