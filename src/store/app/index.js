import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    auth:true,
    theme:'default',
    language:'default',
    loading:false,
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
    data:{
        universalWords:{}
    },
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
        _setDataUniversalWords:(state,action)=>{
            state.data.universalWords = action.payload
        },
        _setMainTitle:(state,action)=>{
            state.mainTitle = action.payload
        },
    }
})

export const {_setAuth,_setTheme,_setLanguage,_setLoading,_setErrors,_setErrorsClear,_setDeleteErrors,_setDataUniversalWords,_setMainTitle} = app.actions
export default app.reducer