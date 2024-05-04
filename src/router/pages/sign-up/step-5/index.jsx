import React,{useEffect} from 'react'
import { useOutletContext,useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import { fadeIn } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

import { useDataUniversalWords } from '../../../../store/app/hooks';
import { useData, useDataSignUp } from '../../../../store/controls/hooks';
import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'
import { setDataSignUp, setStep } from '../../../../store/controls/actions';

import Checkbox from '../../../../components/forms/checkbox';

import { contract } from '../../../../utils/consts/contract';
import { setDeleteErrors, setErrors, setLoading } from '../../../../store/app/actions';

import {examplefetch} from '../../../../utils/helpers/exampleFetch'
import { sentenceCutter } from '../../../../utils/helpers/sentenceCutter';
import { convertMoonStringToIndex } from '../../../../utils/helpers/convert/convertDateStringToIndex'
import { convertGenderLanguage } from '../../../../utils/helpers/convert/convertGenderLanguage'

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const formData = useData()
  const universalWords = useDataUniversalWords().forms

  const styles = StyleSheet.create({
    effect: {
      animationName: fadeIn,
      animationDuration: '1s'
    }
  })
  
  const validationSchema = Yup.object({
    contract:Yup.object({
      infoCheck1: Yup
      .boolean(universalWords.required)
      .oneOf([true], universalWords.checkbox),
      infoCheck2: Yup
      .boolean(universalWords.required)
      .oneOf([true], universalWords.checkbox),
      infoCheck3: Yup
      .boolean(universalWords.required)
      .oneOf([true], universalWords.checkbox),
    })
  });

  const onSubmit = (values)=>{
    setLoading(true)
    setButtonSubmit({disabled:true})
    //console.log('signIn step-5 submit edildi burada controller yapılacak',JSON.stringify(values))
    setDataSignUp({...values})


  // comunicate the backend
    const postData = {
      ...formData.signUp,...values,
      date:{
        ...formData.signUp.date,
        moon:convertMoonStringToIndex(formData.signUp.date.moon),
      },
      gender:convertGenderLanguage(formData.signUp.gender)
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
      console.error(error);
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
    const pathname = window.location.pathname;  
    setStep(pathname.split('/')[pathname.split('/').length -1].split('-')[1])

    setDeleteErrors([])

    setButtonNext({active:false,URL:''})
    setButtonSubmit({title:'kayıt ol',active:true,URL:''});
    setButtonBack({title:'',active:true,URL:'sign-up/step-2'})

  },[])

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={css(styles.effect)}>
          <b>Uygulama için gerekli izinleri doldurmanız gerekmektedir. (Yan tarafta bulunan bilgi bölümünden içeriğe göz atabilirsiniz).</b>
          <div style={{height:"10px"}} />
          <Checkbox 
            name="contract.infoCheck1" 
            label="Elektronik Onay Metni"
            modal={{
              name:'okModal',
              data:{
                title:contract[0].title,
                body:contract[0].body
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
            label="Ödeme İşlemleri Yetkilerini Onaylıyorum"
            modal={{
              name:'okModal',
              data:{
                title:contract[1].title,
                body:contract[1].body
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
            label="İşlemler ve İstatistikler Yetkilerini Onaylıyorum"
            modal={{
              name:'okModal',
              data:{
                title:contract[2].title,
                body:contract[2].body
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
