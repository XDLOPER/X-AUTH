import {configureStore} from '@reduxjs/toolkit'

import project from './project/index'
import app from './app/index/index'
import modals from './app/modals/index'

const store = configureStore({
     reducer:{
          project,
          app,
          modals
     }
})

export default store 