import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    step:1,
}

const signIn = createSlice({
    initialState,
    name:'signIn',
    reducers:{
        _setStep:(state,action)=>{
            state.step = action.payload
        },
    }
})

export const {_setStep} = signIn.actions
export default signIn.reducer