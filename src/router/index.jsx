import { createBrowserRouter} from 'react-router-dom'
import React from 'react';

import LAYOUT from './layout';
import SignIn from './pages/sign-in/index';
import SignUp from './pages/sign-up/index';


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
            }
          ]
        },
      ])


export default router