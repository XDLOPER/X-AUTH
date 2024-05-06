import {createSlice} from '@reduxjs/toolkit'

import { i18n } from '../../../utils/language/index'
import { readCookie } from '../../../utils/helpers/cookie/readCookie'

const initialState = {
     loading:false,
     mainTitle:'',
     errors:[
          /*{
              title:'error:2313123',
              body:{
                  errorCode:0,
                  message:'',
                  description:'',
              },
              time:''
          },*/
  
     ],
     settings:{
          theme: readCookie('theme') ? readCookie('theme') : 'default',
          language:i18n.language,
     }
}

const app = createSlice({
     initialState,
     name:'app',
     reducers:{
          _setLoading:(state,action) => {
               state.loading = action.payload
          },
          _setMainTitle:(state,action)=>{
               state.mainTitle = action.payload
          },
          _setErrors:(state,action)=>{
               if(state.errors.length < 3){
                   state.errors = [...state.errors,action.payload]
               }else{
                   const endTwoErrors = state.errors.slice(-2) // slice(-1,-2) methodu yanlış çalışıyor. onun yerine -2 yazarsak direk -1,-2'nci değerleri alıyor
                   state.errors = [...endTwoErrors,action.payload]
               }
          },
          _setErrorsClear:(state,action)=>{
               state.errors = []
          },
          _setDeleteErrors:(state,action)=>{
               state.errors = action.payload
          },
          _setTheme : (state,action) => {
               state.settings.theme = action.payload
          },
          _setLanguage : (state,action) => {
               state.settings.language = action.payload
          },
     }  
}) 

export const {_setLoading, _setMainTitle, _setErrors, _setErrorsClear, _setDeleteErrors, _setTheme, _setLanguage} = app.actions
export default app.reducer