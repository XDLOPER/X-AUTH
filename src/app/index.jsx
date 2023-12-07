import React,{useEffect} from "react"
import {RouterProvider, useRoutes} from 'react-router-dom'
import { Provider, useDispatch } from "react-redux";

// COMPONENT
  import AppStoreAxess from '../components/app/appStoreAxess'

// CONFIG
  import x_auth_store from '../store/index'
  import router from '../router'

// BOOTSTRAP
  // bootstrap style
  import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'; // browser style reset
  import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css';
  import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
  import '../../node_modules/bootstrap/dist/css/bootstrap.css';

  import '../style/index.css';
  import '../style/form.css';
  import '../style/layout.css';
  import '../style/media.css';


const X_AUTH_APP = ({children}) => {
  //const routeElement = useRoutes(router);
  return (
    <>
      <Provider store={x_auth_store}>
        <RouterProvider router={router}>
          <AppStoreAxess>
            {(props) => (
              <div>
                {/* ... your rendering logic using props */}
              </div>
            )}
          </AppStoreAxess>
        </RouterProvider>
      </Provider>
    </>
  )
}

export default X_AUTH_APP




