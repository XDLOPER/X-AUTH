import store from '../index.js'
import {_setTemplate, _setTemplateTitle, _setTemplateMetaCharset, _setTemplateMetaContent, _setAuth, _setLoading, _setCompany} from './index.js'

export const setTemplate = value => store.dispatch(_setTemplate(value))
export const setTemplateTitle = value => store.dispatch(_setTemplateTitle(value))
export const setTemplateMetaCharset = value => store.dispatch(_setTemplateMetaCharset(value))
export const setTemplateMetaContent = value => store.dispatch(_setTemplateMetaContent(value))
export const setAuth = value => store.dispatch(_setAuth(value))
export const setLoading = value => store.dispatch(_setLoading(value))
export const setCompany = value => store.dispatch(_setCompany(value))
