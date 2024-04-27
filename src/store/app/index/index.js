import {createSlice} from '@reduxjs/toolkit'

import { i18n } from '../../../utils/language/index'
import { readCookie } from '../../../utils/helpers/cookie/readCookie'

const initialState = {
     auth:false,
     settings:{
          theme: readCookie('theme') ? readCookie('theme') : 'default',
          language:i18n.language,
     }
}

const app = createSlice({
     initialState,
     name:'app',
     reducers:{
          _setAuth : (state,action) => {
               state.auth = action.payload
          },
          _setTheme : (state,action) => {
               state.settings.theme = action.payload
          },
          _setLanguage : (state,action) => {
               state.settings.language = action.payload
          },
     }  
}) 

export const {_setAuth ,_setTheme, _setLanguage} = app.actions
export default app.reducer