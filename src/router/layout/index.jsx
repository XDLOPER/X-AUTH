import React,{useState} from 'react'
import {Outlet,Link} from 'react-router-dom'

import logo from '../../media/images/logo.png'
import style from './index.css'
import SubmitButton from '../../components/buttons/submit'

const LAYOUT = () => {
  const [formData, setFormData] = useState({});

  const handleButtonClick = () => {
    // Burada form verilerini işleyebilir veya isteği başlatabilirsiniz
    console.log("Form Verileri:", formData);
  };

  return (
    <div id="x_auth" style={style.x_auth}>
        <div className="wrapper">
          <div className="auth">
            <header id="auth">
              <div className="circle">
                <div className="circleone"></div>
                <div className="img"><img src={logo} alt=""/></div>
                <div className="circletwo"></div>
                <div className="circlethree"></div>
              </div>
            </header>
            <hr id='auth'></hr>
            <div className='content'>
              <Outlet context={setFormData}></Outlet>
            </div>  
            <footer id="auth">
              <div className="buttonGroup">
                <SubmitButton to="/sign-in">back</SubmitButton>
                <SubmitButton on onClick={handleButtonClick}>giriş yap</SubmitButton>
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
