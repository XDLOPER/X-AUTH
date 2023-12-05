import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'

import Text from '../../../../components/forms/text';
import { setStep } from '../../../../store/sign-in/actions';



const Index = () => {


  const initialValues = {
    //step 2
    username:'',
    password:'',
    rePassword: '',
  }

  const validationSchema = Yup.object({
    username:Yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Sadece harf içermelidir')
    .required('Bu alan zorunludur'),  

    password:Yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Sadece harf içermelidir')
    .required('Bu alan zorunludur'),

    rePassword:Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Şifreler uyuşmuyor') // Yup.ref('password') ile password u referans gösteriyoruz 
    .required('Bu alan zorunludur'),
  
  })

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
  })

  useEffect(() => {
    const pathname = window.location.pathname;
    setStep(pathname.split('/')[pathname.split('/').length -1].split('-')[1])

    setButtonNext({title:'',active:true,disabled:false,URL:'sign-in/step-5'})
    setButtonBack({title:'',active:true,URL:'sign-in/step-1'});
  },[]);

  return (
    <>          
      <form onSubmit={formik.handleSubmit}>
        <div>
          <Text
            name="username" 
            type="username" 
            placeholder="username" 
            value={formik.values.username} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            touch={formik.touched?.username} 
            error={formik.errors?.username}
          />
          <Text 
            name="password" 
            type="password" 
            placeholder="password" 
            value={formik.values.password} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            touch={formik.touched?.password} 
            error={formik.errors?.password}
          />
          <Text name="rePassword" type="password" placeholder="password" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.rePassword} error={formik.errors.rePassword}/>
        </div>
      </form>  
    </>
  )
}

export default Index
