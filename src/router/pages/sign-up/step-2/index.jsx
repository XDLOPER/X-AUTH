import React,{useEffect} from 'react'
import { useOutletContext,useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { useDataUniversalWords } from '../../../../store/app/hooks';
import { useData } from '../../../../store/controls/hooks';
import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'
import Text from '../../../../components/forms/text';

import { setDataSignUp, setStep } from '../../../../store/controls/actions';
import { setErrors, setLoading } from '../../../../store/app/actions';

import { sentenceCutter } from '../../../../utils/helpers/sentenceCutter';


const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const formData = useData()
  const universalWords = useDataUniversalWords().forms
  

  const validationSchema = Yup.object({
    username:Yup
    .string(universalWords.validCharacter)
    .min(2, universalWords.twoCharacter)
    .max(10, universalWords.tenCharacter)
    .matches(/^[a-zA-Z0-9.\-_]+$/, universalWords.username.privateCharacter)
    .required(universalWords.required),  

    password:Yup
    .string(universalWords.validCharacter)
    .matches(/^[\s\S]{6,30}$/, universalWords.password)
    .required(universalWords.required),  


    rePassword:Yup
    .string(universalWords.validCharacter)
    .oneOf([Yup.ref('password'), null], universalWords.rePassword) // Yup.ref('password') ile password u referans gösteriyoruz 
    .required(universalWords.required),  
  
  })

  const onSubmit = (values)=>{
    setLoading(true)
    setButtonSubmit({disabled:true})
    //console.log('signIn step-2 submit edildi burada controller yapılacak',JSON.stringify(values))
    setDataSignUp({...values})
    
    fetch('/api/v1/auth/users')
    .then(response => response.json()) // Bu da bir promise döndürebilir
    .then(data => {
      const usernameValid = data.message?.find((value) => value.username === values.username)

      if(usernameValid){
        setErrors({
          title:'info',
          body:{
          message:sentenceCutter('"' + usernameValid.username + '"' + " " + 'kullanıcı adı zaten mevcut',50)
          },
          time:data?.time
        })
      }else{
        navigate('/sign-up/step-5')
      }
      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    .catch(error => {
      console.error(error);
      setErrors({
        title:'ERROR',
        body:{
          message:sentenceCutter(error?.message,50)
        },
      })
      setButtonSubmit({disabled:false})
      setLoading(false)
    });
    
    //navigate('/sign-up/step-5')
  }

  const formik = useFormik({
      initialValues:{...formData.signUp},
      validationSchema,
      onSubmit
  })

  useEffect(() => {
    const pathname = window.location.pathname;
    setStep(pathname.split('/')[pathname.split('/').length -1].split('-')[1])

    setButtonNext({active:true})
    setButtonSubmit({active:false})
    setButtonBack({URL:'sign-up/step-1'});
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
