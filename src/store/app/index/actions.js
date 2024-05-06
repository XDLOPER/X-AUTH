import store from '../../index'
import {_setLoading, _setMainTitle, _setErrors, _setErrorsClear, _setDeleteErrors, _setTheme, _setLanguage} from './index'

export const setLoading = value => store.dispatch(_setLoading(value))
export const setMainTitle = value => store.dispatch(_setMainTitle(value))
export const setErrors = value => store.dispatch(_setErrors(value))
export const setErrorsClear = value => store.dispatch(_setErrorsClear([]))
export const setDeleteErrors = value => store.dispatch(_setDeleteErrors(value))
export const setTheme = value => store.dispatch(_setTheme(value))
export const setLanguage = value => store.dispatch(_setLanguage(value))