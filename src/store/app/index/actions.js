import store from '../../index'
import {_setAuth,_setTheme,_setLanguage,_setLeftSidebarOpen,_setLeftSidebarType,_setRightSidebarOpen,_setRightSidebarType} from './index'

export const setAuth = value => store.dispatch(_setAuth(value))
export const setTheme = value => store.dispatch(_setTheme(value))
export const setLanguage = value => store.dispatch(_setLanguage(value))