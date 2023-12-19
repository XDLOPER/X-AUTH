import React,{useRef} from 'react'
import {Outlet} from 'react-router-dom'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

import logo from '../../media/images/logo.png'

import { useModals } from '../../store/modals/hooks';
import {useMainTitle,useLoading, useErrors} from '../../store/app/hooks'
import {setLoading} from '../../store/app/actions'
import {useButtons} from '../../store/buttons/hooks'

import AtomusLoading from '../../components/loading/atomusLoading'
import X_button from '../../components/buttons/x-button'
import Modals from '../../components/modals';
import Toasts from '../../components/toasts';


const LAYOUT = () => {
  const buttonFormDataSubmitRef = useRef(null)

  const errorList = useErrors()
  const loading = useLoading()
  const modals = useModals()
  const buttonsArray = useButtons()

  //setTimeout(()=>{setLoading(!loading);console.log('loading...')},10000)

  const layoutButtonsTrigger = (events,type) => {
    if(type !== 'left' && buttonFormDataSubmitRef){
      buttonFormDataSubmitRef?.current?.click()
    }
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
                  <div className="loading">
                    <AtomusLoading loadingState={useLoading()} logo={logo}></AtomusLoading>
                  </div>
              </header>
              <hr id='auth'></hr>
              <div className='content'>
                <div className="wrapper">
                  <h1 className='auth-title'>{useMainTitle()}</h1>
                  <div className="content">
                    <div className='content-error'>
                      {
                        errorList.map((error,index)=>{
                          return (
                              <Toasts key={index} data={error}></Toasts>
                          )
                          
                        })
                      }
                    </div>
                      <Outlet context={[buttonFormDataSubmitRef]}></Outlet>           
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
                      return(
                        <X_button key={index} type="submit" onClick={(e) => layoutButtonsTrigger(e,value.type)} on={value.active} to={value.URL} disabled={value.disabled}>
                          {(value.type === 'left' && value.title === "") ? <BsArrowLeft/> : (value.type === "left") && value.title}
                          {(value.type === 'center' && value.title === "") ? <IoChevronDownOutline/> : (value.type === "center") && value.title}
                          {(value.type === 'right' && value.title === "") ? <BsArrowRight/> : (value.type === "right") && value.title}
                        </X_button>
                      )
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
