import React,{useEffect} from 'react'
import {RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'; 

import ProjectMiddlewares from '../component/middlewares/project/index'
import AtomusLoading from '../component/loading/atomusLoading'

import router from '../router/index'
import store from '../store/index'
import logo from '../media/images/logo.png'

const X_PROJECT_S = () => {

  return (
     <Provider store={store}>
        <ProjectMiddlewares>
          {
            props => {
              const {projectLoading} = props

              if(projectLoading){
                return <RouterProvider router={router}></RouterProvider>
              }else{
                return <AtomusLoading loadingState={!projectLoading} logo={logo}/> // => (!) necessary for component
              }
              
            }
          }
        </ProjectMiddlewares>
     </Provider>
  )
}

export default X_PROJECT_S
