import React,{useEffect,useState} from 'react'
import { useOutletContext,useNavigate,useLocation } from 'react-router';

import { useDataUniversalWords } from '../../../store/app/hooks';
import { useData } from '../../../store/controls/hooks';
import {setButtonBack, setButtonNext, setButtonSubmit} from '../../../store/buttons/actions'
import {setDataSignIn, setStep} from '../../../store/controls/actions'

import {location} from '../../../utils/helpers/location'

import vectorURL from '../../../media/images/finish.png'
import { setLoading, setMainTitle } from '../../../store/app/actions';

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const formData = useData()



  useEffect(() => {
    console.log(formData)
  }, [formData]);

  useEffect(() => {
    setMainTitle('');
    setLoading(false)

    setButtonBack({URL:'/',active:true,})
    setButtonSubmit({URL:'/',active:false,})
    setButtonNext({active:false,disabled:false})
  },[]);
  
  return (
    <>          
      <div style={{width:"100%",height:'100%',display:'flex'}}>
        <img src={vectorURL} alt="" style={{width:"75%",margin:'0 auto'}}/>
      </div>
      <div style={{width:"100%",height:'100%',display:'flex'}}>
        <b style={{margin:'0 auto'}}>yönlendiriliyorsunuz...</b>
      </div>
    </>
  )
}

export default Index
