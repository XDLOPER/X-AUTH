import {createBrowserRouter} from 'react-router-dom'

import WEB_FOR_LAY from './web_for_layout/index'

import Home from '../pages/home/index'

const router = createBrowserRouter([
     {
          path:'/',
          element:<WEB_FOR_LAY/>,
          children:[
               {
                    index:true,
                    element: <Home/>
               },
          ]
     }
     
]);


export default router