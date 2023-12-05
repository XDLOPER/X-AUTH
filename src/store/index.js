import { configureStore } from "@reduxjs/toolkit";

import app from './app/index'
import signIn from './sign-in/index'
import modals from './modals/index'
import buttons from './buttons/index'

const store = configureStore({
    reducer:{
        app,
        modals,
        buttons,
        signIn
    }
})

export default store