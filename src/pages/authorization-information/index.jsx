import React,{useEffect} from 'react'
import { useNavigate, useLocation, useOutletContext } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { fadeIn } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

import { useData } from '../../store/controls/hooks'
import { setButtonSubmit, setButtonBack, setButtonNext} from '../../store/buttons/actions'
import Text from '../../component/forms/text/x-text'

import { setDataSignUp, setPage } from '../../store/controls/actions'
import { setErrors, setLoading } from '../../store/app/index/actions'

import { sentenceCutter } from '../../utils/helpers/sentenceCutter'

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const location = useLocation()
  const translation = useTranslation()

  const formData = useData()

  const styles = StyleSheet.create({
    effect: {
      animationName: fadeIn,
      animationDuration: '1s'
    }
  })

  const validationSchema = Yup.object({
    username:Yup
    .string(translation.t('form.messages.invalidCharacter'))
    .min(2, translation.t('form.messages.min.two'))
    .max(10, translation.t('form.messages.max.ten'))
    .matches(/^[a-zA-Z0-9.\-_]+$/, translation.t('form.messages.max.ten'))
    .required(translation.t('form.messages.required')),

    email:Yup
    .string(translation.t('form.messages.invalidCharacter'))
    .email(translation.t('form.messages.email.invalidEmail'))
    .required(translation.t('form.messages.required')),  

    password:Yup
    .string(translation.t('form.messages.invalidCharacter'))
    .min(6,translation.t('form.messages.min.six'))
    .max(30,translation.t('form.messages.max.thirty'))
    .required(translation.t('form.messages.required')),

    rePassword:Yup
    .string(translation.t('form.messages.invalidCharacter'))
    .oneOf([Yup.ref('password'), null], translation.t('form.messages.password.notMatching')) // Yup.ref('password') ile password u referans gösteriyoruz 
    .required(translation.t('form.messages.required')),  
  
  })

  const onSubmit = (values)=>{
    setLoading(true)
    setButtonSubmit({disabled:true})
    setButtonNext({disabled:true})
    //console.log('signIn step-2 submit edildi burada controller yapılacak',JSON.stringify(values))
    setDataSignUp({...values})

    axios.post('https://api.kargomucuz.com/v1/auth/usernameOrEmailExist', {
      username: values.username,
      email: values.email,
      password: values.password
    })
    .then(response => {
      if(response.data.data.exist){
        setErrors({
          title:translation.t('toast.errorToast.title'),
          body:{
            message:sentenceCutter('"' + values.username + '"' + " " + 'kullanıcı adı zaten mevcut',50)
          },
        })
      }else{
          navigate('/sign-up/before-to-end')
      }

      setButtonNext({disabled:false})
      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    .catch(error => {
      setErrors({
        title:translation.t('toast.errorToast.title'),
        body:{
          message:sentenceCutter(error?.message,50)
        },
      })
      setButtonNext({disabled:false})
      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    
    //navigate('/sign-up/step-5')
  }

  const formik = useFormik({
      initialValues:{...formData.signUp},
      validationSchema,
      onSubmit
  })

  useEffect(() => {
    setPage(location.pathname)

    setButtonNext({active:true})
    setButtonSubmit({active:false})
    setButtonBack({URL:'sign-up/personal-information',title:''});
  },[])

    return (
      <>          
      <form onSubmit={formik.handleSubmit} className={css(styles.effect)}>
        <div style={{height:'45px',marginBottom:'15px'}}>
          <Text
            name="username" 
            type="username" 
            placeholder={translation.t('form.placeholder.username')}
            value={formik.values.username} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            touch={formik.touched?.username} 
            error={formik.errors?.username}
          />
        </div>

        <div style={{height:'45px',marginBottom:'15px'}}>
          <Text
            name="email" 
            type="email" 
            placeholder={translation.t('form.placeholder.email')}
            value={formik.values.email} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            touch={formik.touched?.email} 
            error={formik.errors?.email}
          />
        </div>

        <div style={{height:'45px',marginBottom:'15px'}}>
          <Text 
            name="password" 
            type="password" 
            placeholder={translation.t('form.placeholder.password')}
            value={formik.values.password} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            touch={formik.touched?.password} 
            error={formik.errors?.password}
          />
        </div>

        <div style={{height:'45px',marginBottom:'15px'}}>
          <Text 
            name="rePassword" 
            type="password" 
            placeholder={translation.t('form.placeholder.rePassword')}
            value={formik.values.rePassword} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            touch={formik.touched.rePassword} 
            error={formik.errors.rePassword}
          />
        </div>

        <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
      </form>  
    </>
    )
}

export default Index
