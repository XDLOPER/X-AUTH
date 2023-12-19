import { createSlice } from "@reduxjs/toolkit";

import { initialValue as signUpValue } from "../../utils/consts/controls/sign-up-form";
import { initialValue as signInValue } from "../../utils/consts/controls/sign-in-form";

const initialState = {
    data:{
        sign_up:{...signUpValue},
        sign_in:{...signInValue}
    },
    step:1,
}

const controls = createSlice({
    initialState,
    name:'controls',
    reducers:{
        _setDataSignUp:(state,action)=>{
            state.data.sign_up = {...state.data.sign_up, ...action.payload}
        },
        _setDataSignIn:(state,action)=>{
            state.data.sign_in = {...state.data.sign_in, ...action.payload}
        },
        _setStep:(state,action)=>{
            state.step = action.payload
        },
    }
})

export const {_setDataSignUp,_setDataSignIn,_setStep} = controls.actions
export default controls.reducer