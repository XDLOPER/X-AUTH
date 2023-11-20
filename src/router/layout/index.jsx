import React,{useState} from 'react'
import {Outlet,Link} from 'react-router-dom'

import {setButtonSubmit,setButtonBack,setButtonNext} from '../../store/app/actions.js'
import {useButtonSubmitActive,useButtonBackActive,useButtonNextActive, useButtonBackURL, useButtonNextURL, useButtonSubmitURL} from '../../store/app/hooks'

import logo from '../../media/images/logo.png'
import style from '../../style/layout.css'
import SubmitButton from '../../components/buttons/submit'

const LAYOUT = () => {
  const [formData, setFormData] = useState({});
  //setButtonBack({active:true,URL:''})
  //setButtonNext({active:true,URL:''})

  const handleButtonClick = () => {
    // Burada form verilerini işleyebilir veya isteği başlatabilirsiniz
    console.log("Form Verileri:", formData);
  };

  return (
    <div id="x_auth" style={style.x_auth}>
        <div className="wrapper d-flex flex">
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
                <SubmitButton on={useButtonBackActive() ? true : false} to={useButtonBackURL()}>back</SubmitButton>
                <SubmitButton on={useButtonSubmitActive() ? true : false} to={useButtonSubmitURL()} onClick={handleButtonClick}>giriş yap</SubmitButton>
                <SubmitButton on={useButtonNextActive() ? true : false} to={useButtonNextURL()}>next</SubmitButton>
              </div>
              <p>X-Auth Inc.</p>
            </footer>
          </div>
        </div>
    </div>
  )
}

export default LAYOUT
