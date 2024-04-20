import React,{ useState, useRef } from 'react'
import {Outlet} from 'react-router-dom'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { IoChevronDownOutline } from "react-icons/io5"

import AtomusLoading from '../../components/loading/atomusLoading'
import X_button from '../../components/buttons/x-button'
import Modals from '../../components/modals'
import Toasts from '../../components/toasts'

import { useModals } from '../../store/modals/hooks'
import {useMainTitle,useLoading, useErrors} from '../../store/app/hooks'
import {setDeleteErrors, setErrors, setLoading} from '../../store/app/actions'
import {useButtons} from '../../store/buttons/hooks'

import logo from '../../media/images/logo.png'
import logoKargomucuz from '../../media/images/logo-kargomucuz.png'

import { buttonType } from '../../utils/models//enun.buttons'


const LAYOUT = () => {
  const buttonFormDataSubmitRef = useRef(null)
  const errorList = useErrors()
  const loading = useLoading()
  const modals = useModals()
  const layoutbButtons = useButtons()

  //setTimeout(()=>{setLoading(!loading);console.log('loading...')},10000)

  const onCloseToast = (index) => {
    const newList = [...errorList] // react hookları direk errorList üzerinden diziyi değiştirmeye izin vermiyor.
    newList.pop() // Diziden bir öğe çıkar
    setDeleteErrors(newList);
  }
  
  return (
    <>
      {
        modals && 
        modals.map((modal,index) => <Modals key={index} name={modal.name} modalData={modal}></Modals>)
      }
      <div id="x_auth">
          <div className="wrapper d-flex flex">
            <div className="auth">
              <header id="layout">
                  <div className="loading">
                    <AtomusLoading loadingState={useLoading()} logo={logoKargomucuz}></AtomusLoading>
                  </div>
              </header>
              <hr id='layout'></hr>
              <div className='content'>
                <div className="wrapper">
                  <h1 id='layout-title'>{useMainTitle()}</h1>
                  <div className="content">
                    <div className='content-error'>
                      {
                        errorList?.map((error,index)=>{
                          return (
                              <Toasts key={index} data={error} onClose={onCloseToast} style={{position:"relative",top:`${-80 * index}px`}}></Toasts>
                          )
                          
                        })
                      }
                      <div className={errorList?.length > 2 ? 'gradient-bar' : 'pasive'}></div>
                    </div>
                      <Outlet context={[buttonFormDataSubmitRef]}></Outlet>           
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>  
              <footer id="layout">
                <div className="buttonGroup">
                  {
                    layoutbButtons?.map((value,index) => LayoutButtonRender({key:index,ref:buttonFormDataSubmitRef,...value}))
                  }
                </div>
                <p>By<img className='footerCompanyLogo' src={logo} alt="x" />kargomucuz.</p>
              </footer>
            </div>
          </div>
      </div>
    </>
  )
}

const LayoutButtonRender = (props) => {
  const { key, ref, type, active, disabled, URL, title } = props

  const childrenRender = (type, title) => {
    switch (type) {
      case buttonType.left:
        return (
          (title === "") ? <BsArrowLeft/> : title
        )
      case buttonType.center:
        return (
          (title === "") ? <IoChevronDownOutline/> : title
        )
      case buttonType.right:
        return (
          (title === "") ? <BsArrowRight/> : title
        )
    }
  }

  const layoutButtonsTrigger = (events,type) => {
    if(type !== buttonType.left && ref){
      ref?.current?.click()
    }
  }

  return <X_button
      key={key}
      type="submit"
      onClick={(e) => layoutButtonsTrigger(e,type)} 
      on={active} 
      to={URL} 
      disabled={disabled}
    >
      { childrenRender(type, title) }
    </X_button>
  
}

export default LAYOUT
