import { createBrowserRouter} from 'react-router-dom'
import React from 'react';

import LAYOUT from './layout';
import SignIn from './pages/sign-in/index';
import SignUp from './pages/sign-up/index';
import Test from '../test/formik'

const router = createBrowserRouter([
        {
          path:'/',
          element:<LAYOUT/>,
          children:[
            {
              index:true,
              element:<SignUp/>
            },
            {
              path:'/sign-in',
              element:<SignIn/>
            },
            {
              path:'/test',
              element:<Test/>
            }
          ]
        },
      ])


export default router