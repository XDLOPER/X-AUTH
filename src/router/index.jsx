import { createBrowserRouter} from 'react-router-dom'
import React from 'react';

import LAYOUT from './layout';
import SignIn from './pages/sign-in/index';
import SignInStep1 from './pages/sign-in/step-1';
import SignInStep2 from './pages/sign-in/step-2';
import SignInStep3 from './pages/sign-in/step-3';
import SignInStep4 from './pages/sign-in/step-4';
import SignInStep5 from './pages/sign-in/step-5';
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
              element:<SignIn/>,
              children:[
                {path:'step-1',element:<SignInStep1/>},
                {path:'step-2',element:<SignInStep2/>},
                {path:'step-3',element:<SignInStep3/>},
                {path:'step-4',element:<SignInStep4/>},
                {path:'step-5',element:<SignInStep5/>},
              ]
            },
            {
              path:'/test',
              element:<Test/>
            }
          ]
        },
      ])


export default router