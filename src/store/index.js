import {configureStore} from '@reduxjs/toolkit'

import project from './project/index'
import app from './app/index/index'
import controls from './controls/index'

import modals from './app/modals/index'
import buttons from './buttons/index'

const store = configureStore({
     reducer:{
          project,
          app,
          controls,
          modals,
          buttons
     }
})

export default store 