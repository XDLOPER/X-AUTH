import React from 'react'
import {Outlet,Link} from 'react-router-dom'

import logo from '../../media/images/logo.png'
import style from './index.css'

const LAYOUT = () => {

  return (
    <div id="x_auth" style={style.x_auth}>
        <div className="wrapper">
          <div className="auth">
            <header id="auth"><img src={logo} className='auth-image'/></header>
            <hr id='auth'></hr>
            <Outlet></Outlet>
            <footer id="auth"><p>x 2023 Tüm Haklarla Saklıdır</p></footer>
          </div>
        </div>
    </div>
  )
}

export default LAYOUT
