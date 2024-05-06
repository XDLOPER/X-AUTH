import {createBrowserRouter} from 'react-router-dom'

import WEB_FOR_LAY from './web_for_layout/index'

import SignIn from '../pages/sign-in/index'
import SignUp from '../pages/sign-up/index'
import PersonalInformation from '../pages/personal-information/index'
import AuthorizationInformation from '../pages/authorization-information/index'
import BeforeToEnd from '../pages/before-the-end/index'
import Finish from '../pages/finish/index'

const router = createBrowserRouter([
     {
          path:'/',
          element:<WEB_FOR_LAY/>,
          children:[
               {
                    index:true,
                    element: <SignIn/>
               },
               {
                    path:'/sign-up',
                    element:<SignUp/>,
                    children:[
                       {
                         path:'personal-information',
                         element:<PersonalInformation/>
                       },
                       {
                         path:'authorization-information',
                         element:<AuthorizationInformation/>
                       },
                       {
                         path:'before-to-end',
                         element:<BeforeToEnd/>
                       }
                    ]
               },
               {
                    path:'finish',
                    element:<Finish/>
               },
          ]
     }
     
]);


export default router