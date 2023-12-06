import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth:true,
    theme:'default',
    language:'default',
    loading:false,
    errors:[
        {
            title:'error:2313123',
            body:{
                errorCode:0,
                message:'',
                description:'',
            },
            time:''
        },

    ],
    mainTitle:'',
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
        _setLoading:(state,action)=>{
            state.loading = action.payload
        },
        _setErrors:(state,action)=>{
            state.errors = action.payload
        },
        _setMainTitle:(state,action)=>{
            state.mainTitle = action.payload
        },
    }
})

export const {_setAuth,_setTheme,_setLanguage,_setLoading,_setErrors,_setMainTitle} = app.actions
export default app.reducer