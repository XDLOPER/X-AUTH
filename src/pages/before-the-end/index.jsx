import React,{useEffect} from 'react'
import { useNavigate, useLocation, useOutletContext } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { fadeIn } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

import { useData } from '../../store/controls/hooks'
import { setButtonSubmit, setButtonBack, setButtonNext } from '../../store/buttons/actions'
import { setDataSignUp, setPage } from '../../store/controls/actions'
import { useCompanyName } from '../../store/project/hooks'

import Checkbox from '../../component/forms/x-checkbox'

import { mainContract } from '../../utils/consts/contract'
import { setDeleteErrors, setErrors, setLoading } from '../../store/app/index/actions'

import { sentenceCutter } from '../../utils/helpers/sentenceCutter'

const Index = ({context}) => {
    const [buttonFormDataSubmitRef] = useOutletContext(context) 
    const navigate = useNavigate()
    const location = useLocation()
    const translation = useTranslation()

    const formData = useData()
    const companyName = useCompanyName()
  
    const styles = StyleSheet.create({
      effect: {
        animationName: fadeIn,
        animationDuration: '1s'
      }
    })
    
    const validationSchema = Yup.object({
      contract:Yup.object({
        infoCheck1: Yup
        .boolean(translation.t('form.messages.invalidCharacter'))
        .oneOf([true], translation.t('form.messages.required')),
        infoCheck2: Yup
        .boolean(translation.t('form.messages.invalidCharacter'))
        .oneOf([true], translation.t('form.messages.required')),
        infoCheck3: Yup
        .boolean(translation.t('form.messages.invalidCharacter'))
        .oneOf([true], translation.t('form.messages.required')),
      })
    })
  
    const onSubmit = (values)=>{
        setLoading(true)
        setButtonSubmit({disabled:true})
        //console.log('signIn step-5 submit edildi burada controller yapılacak',JSON.stringify(values))
        setDataSignUp({...values})
  
        // comunicate the backend
        const postData = {
            ...formData.signUp,...values,
        }
        
        axios.post('https://api.kargomucuz.com/v1/auth/register', {
            ...postData
        })
        .then(response => {

            if(!response.data.success){
                setErrors({
                title:'error',
                    body:{
                        message:sentenceCutter(response.data?.message,50) 
                    },
                }) 
            }else{
                navigate('/finish')
            }

            setButtonSubmit({disabled:false})
            setLoading(false)
            })

        .catch(error => {

            setErrors({
                title:'ERROR',
                body:{
                    message:sentenceCutter(error?.message,50)
                },
            })
            setButtonSubmit({disabled:false})
            setLoading(false)
        })
    //
  
      //console.log({...formData.signUp,...values})
    }
  
    const formik = useFormik({
        initialValues:{...formData.signUp},
        validationSchema,
        onSubmit
    })
  
    useEffect(() => {
      setPage(location.pathname)
  
      setDeleteErrors([])
  
      setButtonNext({active:false,URL:''})
      setButtonSubmit({title:translation.t('button.register'),active:true,URL:''});
      setButtonBack({title:'',active:true,URL:'sign-up/authorization-information'})
  
    },[])

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={css(styles.effect)}>
                <b>{translation.t('app.pages.beforeTheEnd.mainInfoText')}</b>
                <div style={{height:"10px"}} />
                <Checkbox 
                    name="contract.infoCheck1" 
                    label={mainContract(companyName)[0].title}
                    modal={{
                        name:'okModal',
                            data:{
                                title:mainContract(companyName)[0].title,
                                body:mainContract(companyName)[0].body
                            }
                        }}
                    {...formik.getFieldProps('contract.infoCheck1')}
                    checked={formik.values.contract?.infoCheck1}
                    touch={formik.touched.contract?.infoCheck1} 
                    error={formik.errors.contract?.infoCheck1}
                >
                </Checkbox>
                <Checkbox 
                    name="contract.infoCheck2" 
                    label={mainContract(companyName)[1].title}
                    modal={{
                        name:'okModal',
                            data:{
                                title:mainContract(companyName)[1].title,
                                body:mainContract(companyName)[1].body
                            }
                        }}
                    {...formik.getFieldProps('contract.infoCheck2')}
                    checked={formik.values.contract?.infoCheck2}
                    touch={formik.touched.contract?.infoCheck2} 
                    error={formik.errors.contract?.infoCheck2}
                >
                </Checkbox>
                <Checkbox 
                    name="contract.infoCheck3" 
                    label={mainContract(companyName)[2].title}
                    modal={{
                        name:'okModal',
                            data:{
                                title:mainContract(companyName)[2].title,
                                body:mainContract(companyName)[2].body
                            }
                        }}
                    {...formik.getFieldProps('contract.infoCheck3')}
                    checked={formik.values.contract?.infoCheck3}
                    touch={formik.touched.contract?.infoCheck3} 
                    error={formik.errors.contract?.infoCheck3}
                >
                </Checkbox>
                <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
            </form>       
        </>
    )
}

export default Index
