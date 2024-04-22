import React from "react"
import { RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";

// COMPONENT
  import ProjectMiddlewares from '../components/middlewares/project'
  import AtomusLoading from "../components/loading/atomusLoading";

// MEDIA
  import logo from '../media/images/logo.png'
  import logoKargomucuz from '../media/images/logo-kargomucuz.png'

// CONFIG
  import x_auth_store from '../store/index'
  import router from '../router'
  
// BOOTSTRAP
  import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css' // browser style reset
  import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css'
  import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
  import '../../node_modules/bootstrap/dist/css/bootstrap.css'

  import '../style/index.css'
  import '../style/form.css'
  import '../style/layout.css'
  import '../style/animations.css'
  import '../style/media.css'
  
  import '../style/pages.css';


const X_AUTH_APP = ({children}) => {
  return (
    <>
      <Provider store={x_auth_store}>
        <ProjectMiddlewares>
          {
            props => {
              const {projectLoading} = props

              if(projectLoading){
                return <RouterProvider router={router}></RouterProvider>
              }else{
                return <AtomusLoading loadingState={!projectLoading} logo={logoKargomucuz}/>
              }
              
            }
          }
        </ProjectMiddlewares>
      </Provider>
    </>
  )
}

export default X_AUTH_APP




