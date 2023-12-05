import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buttons:[
        {
            type:'left',
            title:'back',
            active:false,
            disabled:false,
            URL:''
        },
        {
            type:'center',
            title:'submit',
            active:false,
            disabled:false,
            URL:''
        },
        {
            type:'right',
            title:'next',
            active:false,  
            disabled:false, 
            URL:''
        },
    ]
}

const buttons = createSlice({
    initialState,
    name:'buttons',
    reducers:{
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

export const {_setButtonBack,_setButtonNext,_setButtonSubmit} = buttons.actions
export default buttons.reducer