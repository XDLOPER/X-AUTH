import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading:false
}

const project = createSlice({
    initialState,
    name:'project',
    reducers:{
        _setLoading:(state,action)=>{
            state.loading = action.payload
        }
    }
})

export const {_setLoading} = project.actions
export default project.reducer