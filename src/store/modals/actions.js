import store from '../index.js'
import {_setModalAppend,_setModalDestroy,_setModalDestroyAll} from './index.js'

import { basicIDGenerate } from '../../utils/helpers/ID/basicIDGenerate.js'

export const setModalAppend = (name,data = false,ID = basicIDGenerate(3)) => store.dispatch(_setModalAppend({name,data,ID}))
export const setModalDestroy = value => {store.dispatch(_setModalDestroy(value));console.log(value)}
export const setModalDestroyAll = () => store.dispatch(_setModalDestroyAll())
