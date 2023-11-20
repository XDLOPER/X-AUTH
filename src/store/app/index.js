import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth:true,
    theme:'default',
    language:'default',
    buttons:{
        buttonBack:{
            active:false,
            URL:''
        },
        buttonSubmit:{
            active:false,
            URL:''
        },
        buttonNext:{
            active:false,
            URL:''
        },
    }
}

const app = createSlice({
    initialState,
    name:'app',
    reducers:{
        _setAuth:(state,action)=>{
            state.auth = action.payload
        },
        _setTheme:(state,action)=>{
            state.theme = action.payload
        },
        _setLanguage:(state,action)=>{
            state.language = action.payload
        },
        _setButtonBack:(state,action)=>{
            state.buttons.buttonBack = action.payload
        },
        _setButtonNext:(state,action)=>{
            state.buttons.buttonNext = action.payload
        },
        _setButtonSubmit:(state,action)=>{
            state.buttons.buttonSubmit = action.payload
        }
    }
})

export const {_setAuth,_setTheme,_setLanguage,_setButtonBack,_setButtonNext,_setButtonSubmit} = app.actions
export default app.reducer