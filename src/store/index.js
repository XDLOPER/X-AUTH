import { configureStore } from "@reduxjs/toolkit";

import app from './app/index'
import controls from './controls/index'
import modals from './modals/index'
import buttons from './buttons/index'

const store = configureStore({
    reducer:{
        app,
        modals,
        buttons,
        controls
    }
})

export default store