import React,{useState,useEffect} from 'react'
import {Outlet,Link} from 'react-router-dom'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

import {setButtonSubmit,setButtonBack,setButtonNext,setMainTitle} from '../../store/app/actions'
import {useButtonSubmitActive,useButtonBackActive,useButtonNextActive, useButtonBackURL, useButtonNextURL, useButtonSubmitURL,useMainTitle, useButtonSubmitTitle, useButtonNextTitle, useButtonBackTitle,useButtons} from '../../store/app/hooks'

import logo from '../../media/images/logo.png'
import style from '../../style/layout.css'
import X_button from '../../components/buttons/x-button'

const LAYOUT = () => {
  const [formData, setFormData] = useState({});
  
  const buttonsArray = useButtons();
  
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
              <div className="wrapper">
                <h1 className='auth-title'>{useMainTitle()}</h1>
                <div className="content">
                    <br /><br />
                      <Outlet context={setFormData}></Outlet>           
                    <br />
                    <br />
                    <br />
                </div>
              </div>
            </div>  
            <footer id="auth">
              <div className="buttonGroup">
                {
                  buttonsArray.map((value,index)=>{
                    return <>
                      <X_button key={index} on={value.active} to={value.URL}>
                        {console.log(value)}
                        {(value.type === "left" && value.title === "") ? <BsArrowLeft/> : (value.type === "left") && value.title}
                        {(value.type === "center" && value.title === "") ? <IoChevronDownOutline/> : (value.type === "center") && value.title}
                        {(value.type === "right" && value.title === "") ? <BsArrowRight/> : (value.type === "right") && value.title}
                      </X_button>
                    </>
                  })
                }
              </div>
              <p>X-Auth Inc.</p>
            </footer>
          </div>
        </div>
    </div>
  )
}

export default LAYOUT
