import { createSlice } from "@reduxjs/toolkit"
import i18next from "i18next"

import { companyName } from "../../utils/consts"


const initialState = {
    template:{
        title:'',
        charset:'',
        metaContent:''
    },

    auth:false,
    loading:false,

    company:{
        name:companyName    
    },
}

const project = createSlice({
    initialState,
    name:'project',
    reducers:{
        _setTemplate:(state,action)=>{
            state.template = action.payload
        },
        _setTemplateTitle:(state,action) => {
            state.template.title = action.payload + ' - ' + i18next.t('app.subTitle') /* + ' - ' => burada 0Auth un isimi gelicek */
        },
        _setTemplateMetaCharset:(state,action)=>{
            state.template.charset = action.payload
        },
        _setTemplateMetaContent:(state,action)=>{
            state.template.metaContent = action.payload
        },
        _setAuth:(state,action) => {
            state.auth = action.payload
        },
        _setLoading:(state,action)=>{
            state.loading = action.payload
        },
        _setCompany:(state,action)=>{
            state.company = action.payload
        }
    }
})

export const { _setTemplate, _setTemplateTitle, _setTemplateMetaCharset, _setTemplateMetaContent, _setAuth, _setLoading, _setCompany } = project.actions
export default project.reducer