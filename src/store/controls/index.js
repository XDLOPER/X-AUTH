import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{
        sign_up:{},
        sign_in:{}
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