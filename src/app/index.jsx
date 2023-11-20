import React from "react"
import {RouterProvider} from 'react-router-dom'
import { Provider } from "react-redux";

// config imported

import store from '../store/index'
import router from '../router'

// style setup
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'; // browser style reset
//import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css'; 
import '../style/index.css';
import '../style/form.css';


const X_AUTH_SETUP = ({children}) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>

        </RouterProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default X_AUTH_SETUP




