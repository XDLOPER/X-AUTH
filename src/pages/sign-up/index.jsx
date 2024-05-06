import React,{useEffect} from 'react'
import { Outlet, useNavigate, useLocation, useOutletContext } from 'react-router'
import { useTranslation } from 'react-i18next'

import {setButtonBack, setButtonNext, setButtonSubmit} from '../../store/buttons/actions'
import {setMainTitle,setErrorsClear} from '../../store/app/index/actions'
import {useButtonBackActive, useButtonNextActive} from '../../store/buttons/hooks'

import { setPage } from '../../store/controls/actions'
import { setTemplateTitle } from '../../store/project/actions'


function SignUp({context}) {
  const [setFormData,buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const location = useLocation()

  const translation = useTranslation()

  useEffect(() => {
    setMainTitle(translation.t('app.menus.main.signUp'))
    setErrorsClear()
    setPage(location.pathname)
    
    setButtonBack({title:'',active:true,URL:'/'})
    setButtonSubmit({active:false})
    setButtonNext({title:'',active:true,URL:'/'})
  }, [useButtonNextActive,useButtonBackActive]) // neden useButtonNextActive,useButtonBackActive yaptığımı unuttum

  
  useEffect(() => {
    setTemplateTitle(translation.t('button.register'))

    const lastSegment = location.pathname.split('/').pop()
    
    if (lastSegment === 'sign-up' || 'sign-up/') {
      navigate('personal-information')
    }

  }, [navigate])
  
 
  return (
    <>
      <Outlet context={[setFormData,buttonFormDataSubmitRef]}/>
    </>
  );
}

export default SignUp
