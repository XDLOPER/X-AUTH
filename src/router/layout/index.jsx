import React,{useState,useEffect} from 'react'
import {Outlet,Link} from 'react-router-dom'
import { Toast } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

import { useModals } from '../../store/modals/hooks';
import { setModalAppend } from '../../store/modals/actions';
import {useMainTitle,useLoading} from '../../store/app/hooks'
import {setLoading} from '../../store/app/actions'
import {useButtons} from '../../store/buttons/hooks'

import logo from '../../media/images/logo.png'
import X_button from '../../components/buttons/x-button'
import Modals from '../../components/modals';

const LAYOUT = () => {
  const [formData, setFormData] = useState({});
  const [toastShow, setToastShow] = useState(true);

  const loading = useLoading()
  const modals = useModals()
  const buttonsArray = useButtons()


  const toastShowClose = (e) => {
    setToastShow(!toastShow)
  }

  setTimeout(()=>{setLoading(!loading);console.log('tekrar')},10000)

  console.log(modals)


  const handleButtonClick = () => {
    // Burada form verilerini işleyebilir veya isteği başlatabilirsiniz tüm sayfaların bilgileri burdan yönetilicek
    console.log("Form Verileri:", formData);
  };
  
  return (
    <>
      {
        modals && 
        modals.map((modal,index) => <Modals key={index} name={modal.name} modalData={modal}></Modals>)
      }
      <div id="x_auth">
          <div className="wrapper d-flex flex">
            <div className="auth">
              <header id="auth">
                <div className="circle">
                  {
                      <>
                        <div className="img" style={useLoading() !== true ? {padding:0} : null}><img style={useLoading() !== true ? {animationName:'pasive'} : null} className='loadingImage' src={logo} alt=""/></div>
                        <div style={useLoading() !== true ? {animationName:'pasive'} : null} className="circleone"></div>
                        <div style={useLoading() !== true ? {animationName:'pasive'} : null} className="circletwo"></div>
                        <div style={useLoading() !== true ? {animationName:'pasive'} : null} className="circlethree"></div>
                      </>
                  }
                </div>
              </header>
              <hr id='auth'></hr>
              <div className='content'>
                <div className="wrapper">
                  <h1 className='auth-title'>{useMainTitle()}</h1>
                  <div className="content">
                    <div className='content-error'>
                      <Toast show={toastShow} onClose={toastShowClose} animation="true">
                        <Toast.Header>
                          <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                          />
                          <strong className="me-auto">Bootstrap</strong>
                          <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                      </Toast>
                    </div>
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
                        <X_button key={index} on={value.active} to={value.URL} disabled={value.disabled}>
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
    </>
  )
}

export default LAYOUT
