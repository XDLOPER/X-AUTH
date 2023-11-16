import React from "react"
import {RouterProvider} from 'react-router-dom'

// config imported
import router from '../router'

// style setup
import '../style/reset.css';
import '../style/index.css';
import '../style/form.css';

const X_AUTH_SETUP = ({children}) => {
  return (
    <React.StrictMode>
        <RouterProvider router={router}>

        </RouterProvider>
    </React.StrictMode>
  )
}

export default X_AUTH_SETUP




