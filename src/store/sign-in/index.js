import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    step:1,
}

const app = createSlice({
    initialState,
    name:'signIn',
    reducers:{
        _setStep:(state,action)=>{
            state.step = action.payload
        },
    }
})

export const {_setStep} = app.actions
export default app.reducer