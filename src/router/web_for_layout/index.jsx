import React,{useState, useEffect, useRef} from 'react'
import { Outlet } from 'react-router-dom'

import HEADER from './UI/HEADER'
import FOOTER from './UI/FOOTER'

import GoogleAnalytics from '../../component/utils/google-analytics'
import Modals from '../../component/modals'
import AtomusLoading from '../../component/loading/atomusLoading'
import Toasts from '../../component/toasts/index'

import { useMainTitle,useErrors } from '../../store/app/index/hooks'
import { useModals } from '../../store/app/modals/hooks'

import { setDeleteErrors } from '../../store/app/index/actions'

import { googleTrackingID } from '../../utils/consts'

const WEB_FOR_LAY = () => {
  const buttonFormDataSubmitRef = useRef(null)

  const modals = useModals()
  const mainTitle = useMainTitle()

  const errorList = useErrors()

  //setTimeout(()=>{setLoading(!loading);console.log('loading...')},10000)

  const onCloseToast = (index) => {
    const newList = [...errorList] // react hookları direk errorList üzerinden diziyi değiştirmeye izin vermiyor.
    newList.pop()
    setDeleteErrors(newList);
  }
  
  useEffect(() => { // => handler effect 
    const handleResize = () => { // => resize handler 
      const windowWidth = window.innerWidth;

      if (windowWidth <= 850) {
        
      }else{
        
      }
    }

    const handleScroll = () => { // => handleScroll handler
      var scrollTop = window.scrollY
      var documentHeight = document.documentElement.scrollHeight
      var windowWidth = window.innerWidth
      var windowHeight = window.innerHeight
  
      if (Math.floor(scrollTop + windowHeight) +1 >= documentHeight) {
        
      }else{
        
      }

    }

    handleResize()
    handleScroll()
    
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  return (
    <>          
      <GoogleAnalytics trackingId={googleTrackingID}/>
      { // => render modal UI
        modals.length > 0 &&
        (
          <>
            {modals.map((modal,index) => <Modals key={index} name={modal.name} modalData={modal} ></Modals>)}
            <style>
              {`
                #root {
                  filter: ${modals ? 'blur(10px)' : 'none'};
                }
              `}
            </style>
          </>
        )
      }

      <div id="x_auth">
        <div className="wrapper d-flex flex-fill">
            <div className="auth d-flex flex-fill flex-column justify-content-between">

              <HEADER // => render header UI

              />

              <hr id='layout'></hr>
              <div className='content'>
                <div className="wrapper">

                  <h1 id='layout-title'>
                    {mainTitle}
                  </h1>
                  
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

                      <Outlet // => render contents 
                        context={[buttonFormDataSubmitRef]}
                      />

                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              <FOOTER // => render footer UI
                buttonsRef={buttonFormDataSubmitRef}
              />

            </div>
        </div>
      </div>

    </>
  )
}

export default WEB_FOR_LAY
