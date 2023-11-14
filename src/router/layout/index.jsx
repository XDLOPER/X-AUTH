import React from 'react'
import {Outlet,Link} from 'react-router-dom'

import logo from '../../media/images/logo.png'
import style from './index.css'
import SubmitButton from '../../components/buttons/submit'

const LAYOUT = () => {

  return (
    <div id="x_auth" style={style.x_auth}>
        <div className="wrapper">
          <div className="auth">
            <header id="auth">
              <div class="circle">
                <div class="circleone"></div>
                <div className="img"><img src={logo} alt=""/></div>
                <div class="circletwo"></div>
                <div class="circlethree"></div>
              </div>
            </header>
            <hr id='auth'></hr>
            <div className='content'>
              <Outlet></Outlet>
            </div>
            <footer id="auth">
              <div className="buttonGroup">
                <SubmitButton to="/sign-in">back</SubmitButton>
                <SubmitButton on to="/sign-in">giriş yap</SubmitButton>
                <SubmitButton to="/sign-in">next</SubmitButton>
              </div>
              <p>X-Auth Inc.</p>
            </footer>
          </div>
        </div>
    </div>
  )
}

export default LAYOUT
