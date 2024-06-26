import { createSlice } from "@reduxjs/toolkit";

import { initialValue as signUpValue } from "../../utils/models/sign-up-form"
import { initialValue as signInValue } from "../../utils/models/sign-in-form"

const initialState = {
    data:{
        signUp:{...signUpValue},
        signIn:{...signInValue}
    },
    page:'',
}

const controls = createSlice({
    initialState,
    name:'controls',
    reducers:{
        _setDataSignUp:(state,action)=>{
            state.data.signUp = {...state.data.signUp, ...action.payload}
        },
        _setDataSignIn:(state,action)=>{
            state.data.signIn = {...state.data.signIn, ...action.payload}
        },
        _setPage:(state,action)=>{
            state.page = action.payload
        },
    }
})

export const {_setDataSignUp, _setDataSignIn, _setPage} = controls.actions
export default controls.reducer