import React,{useEffect} from 'react'
import { useOutletContext,useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { useData } from '../../../../store/controls/hooks';
import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'
import Text from '../../../../components/forms/text';

import { setDataSignIn, setStep } from '../../../../store/controls/actions';

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()

  const formData = useData()
  
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

  const onSubmit = (values)=>{
    //console.log('signIn step-2 submit edildi burada controller yapılacak',JSON.stringify(values))
    setDataSignIn({...values})
    navigate('/sign-in/step-5')
  }

  const formik = useFormik({
      initialValues:{...formData.sign_in},
      validationSchema,
      onSubmit
  })

  useEffect(() => {
    const pathname = window.location.pathname;
    setStep(pathname.split('/')[pathname.split('/').length -1].split('-')[1])

    setButtonNext({active:true})
    setButtonSubmit({active:false})
    setButtonBack({URL:'sign-in/step-1'});
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
        <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>

      </form>  
    </>
  )
}

export default Index
