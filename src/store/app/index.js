import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth:true,
    theme:'default',
    language:'default',
    mainTitle:'',
    buttons:[
        {
            type:'left',
            title:'back',
            active:false,
            URL:''
        },
        {
            type:'center',
            title:'submit',
            active:false,
            URL:''
        },
        {
            type:'right',
            title:'next',
            active:false,   
            URL:''
        },
    ]
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
        _setMainTitle:(state,action)=>{
            state.mainTitle = action.payload
        },
        _setButtonBack:(state,action)=>{
            state.buttons[0] = { ...state.buttons[0], ...action.payload };
        },
        _setButtonNext:(state,action)=>{
            state.buttons[2] = { ...state.buttons[2], ...action.payload };
        },
        _setButtonSubmit:(state,action)=>{
            state.buttons[1] = { ...state.buttons[1], ...action.payload };
        }
    }
})

export const {_setAuth,_setTheme,_setLanguage,_setMainTitle,_setButtonBack,_setButtonNext,_setButtonSubmit} = app.actions
export default app.reducer