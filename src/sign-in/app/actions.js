import store from '../index.js'
import {_setAuth,_setTheme,_setLanguage,_setMainTitle,_setButtonBack,_setButtonNext,_setButtonSubmit} from './index.js'

export const setAuth = value => store.dispatch(_setAuth(value))
export const setTheme = value => store.dispatch(_setTheme(value))
export const setLanguage = value => store.dispatch(_setLanguage(value))
export const setMainTitle = value => store.dispatch(_setMainTitle(value))
export const setButtonBack = value => store.dispatch(_setButtonBack(value))
export const setButtonNext = value => store.dispatch(_setButtonNext(value))
export const setButtonSubmit = value => store.dispatch(_setButtonSubmit(value))