import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals:[],
}

const modals = createSlice({
    initialState,
    name:'modals',
    reducers:{
        _setModalAppend:(state,action)=>{
            state.modals = [...state.modals,action.payload]
        },
        _setModalDestroy:(state,action)=>{
            const newState = state.modals.filter(modalMatch => modalMatch.ID !== action.payload)
            state.modals = [...newState]
        },
        _setModalDestroyAll:(state)=>{
            state.modals = []
        },
    }
})

export const {_setModalAppend,_setModalDestroy,_setModalDestroyAll} = modals.actions
export default modals.reducer