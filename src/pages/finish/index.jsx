import React,{ useEffect } from 'react'
import { useOutletContext,useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'

import { useData } from '../../store/controls/hooks'
import {setButtonBack, setButtonNext, setButtonSubmit} from '../../store/buttons/actions'

import vectorURL from '../../media/images/finish.png'
import celebrateURL from '../../media/images/celebrate.jpg'
import { setDeleteErrors, setLoading, setMainTitle } from '../../store/app/index/actions'

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const translation = useTranslation()
  
  const formData = useData()

  useEffect(() => {
    //console.log(formData)
  }, [formData])

  useEffect(() => {
    setMainTitle(translation.t('app.menus.main.finish'))
    setLoading(false)

    setDeleteErrors([])

    setButtonBack({URL:'/',active:false,})
    setButtonSubmit({URL:'/',active:false,})
    setButtonNext({URL:'/',active:false,})
  },[])
  
  return (
    <>          
      <div className='finishPageImageWrapper'>
        <img src={celebrateURL ? celebrateURL : vectorURL}/>
      </div>
      <div className="finishPageTextWrapper" >
        <p>Tebrikler <b>{ formData.signUp.name }</b> Kaydın Tamamlandı... Yakın zamanda görüşmek üzere.</p>
      </div>
    </>
  )
}

export default Index
