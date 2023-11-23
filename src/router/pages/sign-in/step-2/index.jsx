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
    //step 2
    email:'',
    password:'',
    rePassword: '',
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
        <div>
          <Text name="email" type="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.email} error={formik.errors.email}/>
          <Text name="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
          <Text name="password" type="password" placeholder="password" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.rePassword} error={formik.errors.rePassword}/>
        </div>
      </form>  
    </>
  )
}

export default Index
