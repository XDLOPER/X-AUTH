import { configureStore } from "@reduxjs/toolkit";

import app from './app/index'

const store = configureStore({
    reducer:{
        app
    }
})

export default store