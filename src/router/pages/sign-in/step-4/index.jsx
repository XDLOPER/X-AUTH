import React,{useEffect} from 'react'
import { useOutletContext } from 'react-router';
import { useFormik } from 'formik';
import path,{dirname} from 'path-browserify'

import {setButtonSubmit,setButtonBack,setButtonNext, setMainTitle} from '../../../../store/app/actions'
import {useButtonBackTitle,useButtonSubmitTitle,useButtonNextTitle} from '../../../../store/app/hooks'

import Text from '../../../../components/forms/text';
import Select from '../../../../components/forms/select';

import * as date from '../../../../utils/consts/date'
import {gender} from '../../../../utils/consts/gender'

const Index = () => {
  
  const currentYear = (new Date()).getFullYear()
  const initialValues = {

      //step 4
      infoCheck:false,
      
  }

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      onSubmit
  })

  useEffect(() => {
    setButtonNext({title:'back',active:false,URL:'sign-in/step-3'})
    setButtonBack({title:'',active:true,URL:'sign-in/step-3'})
    setButtonSubmit({title:'kayıt ol',active:true,URL:''});
  },[]);

  return (
    <>          
        <form onSubmit={formik.handleSubmit}>
            <h1>4</h1>
        </form>
    </>
  )
}

export default Index
