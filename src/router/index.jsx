import { createBrowserRouter} from 'react-router-dom'
import React from 'react';

import LAYOUT from './layout';

import SignIn from './pages/sign-in/index';

import SignUp from './pages/sign-up/index';
import SignUpStep1 from './pages/sign-up/step-1';
import SignUpStep2 from './pages/sign-up/step-2';
// ?
import SignUpStep3 from './pages/sign-up/step-3';
import MailSend from './pages/mail-send';
//
import SignUpStep4 from './pages/sign-up/step-4';

import SignUpStep5 from './pages/sign-up/step-5';


import Finish from '../router/pages/finish';
import Test from '../test/formik'

const router = createBrowserRouter([
        {
          path:'/',
          element:<LAYOUT/>,
          children:[
            {
              index:true,
              
              element:<SignIn/>
            },
            {
              path:'/sign-up',
              element:<SignUp/>,
              children:[
                {path:'step-1',element:<SignUpStep1/>},
                {path:'step-2',element:<SignUpStep2/>},
                {path:'step-3',element:<MailSend/>},
                {path:'step-4',element:<SignUpStep4/>},
                {path:'step-5',element:<SignUpStep5/>},
              ]
            },
            {
              path:'/test',
              element:<Test/>
            },
            {path:'finish',element:<Finish/>},
          ]
        },
      ])


export default router