import React,{useState,useEffect} from 'react'
import { useNavigate, useLocation, useOutletContext } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { fadeIn } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

import XButton from '../../component/buttons/x-button'
import Text from '../../component/forms/text/x-text'
import XSwitch from '../../component/forms/x-switch'

import { setTemplateTitle } from '../../store/project/actions'
import { useData } from '../../store/controls/hooks.js'
import { setDataSignIn, setPage } from '../../store/controls/actions.js'
import { setDeleteErrors, setErrors, setLoading, setMainTitle } from '../../store/app/index/actions'
import { setButtonBack,setButtonNext,setButtonSubmit } from '../../store/buttons/actions'

import { sentenceCutter } from '../../utils/helpers/sentenceCutter.js'
import { Helmet } from 'react-helmet'

const SignIn = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) // => butonun refine ulaşıyoruz
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
    usernameAndEmail:Yup
    .string(translation.t('form.messages.invalidCharacter'))
    .min(2, translation.t('form.messages.min.two'))
    .matches(/^(?=(?:[^.]*\.){0,3}[^.]*$)(?=(?:[^-]*-){0,3}[^-]*$)(?=(?:[^_]*_){0,3}[^_]*$)(?=(?:[^@]*@){0,3}[^@]*$)[a-zA-Z0-9._@-]+$/,translation.t('form.messages.invalidSpecialCharacter'))
    .required(translation.t('form.messages.required')),

    password:Yup
    .string(translation.t('form.messages.invalidCharacter'))
    .min(6,translation.t('form.messages.min.six'))
    .max(30,translation.t('form.messages.max.thirty'))
    .required(translation.t('form.messages.required'))
  })

  const onSubmit = (values) => {
    setLoading(true)
    setButtonSubmit({disabled:true})
    setDataSignIn({...values})

  // comunicate the backend
    const postData = {
      username:values.usernameAndEmail,
      email:formData.usernameAndEmail,
      password:values.password,
      dfm:values.dontForgetMe
    }
    
    axios.post('https://api.kargomucuz.com/v1/auth/login', postData,{
      headers:{}
    })
    .then(response => {

      if(!response.data.success){
        setErrors({
          title:translation.t('toast.errorToast.title'),
          body:{
            message:sentenceCutter(response.data?.message,50) 
          },
        }) 
      }else{
        if(values.dontForgetMe){
          
        }
        navigate('/finish')
      }

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
      
      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    
  //


  }

  const formik = useFormik({
    initialValues:{...formData.signIn},
    validationSchema,
    onSubmit
  })

  useEffect(() => {
    setTemplateTitle(translation.t('button.login'))
    
    setMainTitle(translation.t('app.menus.main.signIn'))
    setLoading(false)
    setPage(location.pathname)

    setDeleteErrors([])

    setButtonBack({active:false})
    setButtonSubmit({title:translation.t('button.login'),active:true})
    setButtonNext({active:false})
  },[])

  useEffect(() => {
    //console.log(formik.values)
  }, [formik.values])
  
    return (
      <>
            <form onSubmit={formik.handleSubmit} className={css(styles.effect)}>
              <div style={{height:'45px',marginBottom:'15px'}}>
                <Text name="usernameAndEmail" type="text" placeholder={translation.t('form.label.usernameAndEmail')} value={formik.values.usernameAndEmail} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.usernameAndEmail} error={formik.errors.usernameAndEmail} />
              </div>
              <div style={{height:'45px',marginBottom:'15px'}}>
                <Text name="password" type="password" placeholder={translation.t('form.placeholder.password')} value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
              </div>

                  <XSwitch
                    name="dontForgetMe" 
                    label={translation.t('form.label.keepLoggedIn')}
                    modal={{
                      name:'okModal',
                      data:{
                        title:translation.t('modal.keepLoggedIn.title'),
                        body:translation.t('modal.keepLoggedIn.body')
                      }
                    }}
                    {...formik.getFieldProps('dontForgetMe')}
                    checked={formik.values.dontForgetMe}
                    touch={formik.touched.dontForgetMe} 
                    error={formik.errors.dontForgetMe}
                  />
                  <button type='submit' style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
            </form>

            <XButton to="/sign-up" on={true} style={{
              marginTop:'15px'
            }}>
              { translation.t('button.registerForward') } 
              <BsArrowRight style={{marginLeft:'10px'}}/>
            </XButton>
      </>
    )
}

export default SignIn
