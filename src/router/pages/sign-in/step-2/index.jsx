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

  }

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      onSubmit
  })

  useEffect(() => {
    setButtonNext({title:'',active:true,URL:'sign-in/step-3'})
    setButtonBack({title:'',active:true,URL:'sign-in/step-1'});
  },[]);

  return (
    <>          
      <form onSubmit={formik.handleSubmit}>
        <h1>2</h1>
      </form>  
    </>
  )
}

export default Index
