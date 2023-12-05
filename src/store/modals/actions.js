import store from '../index.js'
import {_setModalAppend,_setModalDestroy,_setModalDestroyAll} from './index.js'

import { basicIDGenerate } from '../../utils/helpers/ID/basicIDGenerate.js'

export const setModalAppend = ({type='standart',ID = basicIDGenerate(3),data = false,name}) => store.dispatch(_setModalAppend({type,ID,data,name}))
export const setModalDestroy = value => {store.dispatch(_setModalDestroy(value));console.log(value)}
export const setModalDestroyAll = () => store.dispatch(_setModalDestroyAll())
