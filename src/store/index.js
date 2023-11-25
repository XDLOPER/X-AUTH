import { configureStore } from "@reduxjs/toolkit";

import app from './app/index'
import signIn from './sign-in/index'

const store = configureStore({
    reducer:{
        app,
        signIn
    }
})

export default store