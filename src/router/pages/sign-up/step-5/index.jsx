import React,{useEffect} from 'react'
import { useOutletContext,useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { useDataUniversalWords } from '../../../../store/app/hooks';
import { useData } from '../../../../store/controls/hooks';
import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'
import { setDataSignUp, setStep } from '../../../../store/controls/actions';

import Checkbox from '../../../../components/forms/checkbox';

import { contract } from '../../../../utils/consts/contract';

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const formData = useData()
  const universalWords = useDataUniversalWords().forms
  
  const validationSchema = Yup.object({
    infoCheck1: Yup
    .boolean(universalWords.required)
    .oneOf([true], universalWords.checkbox),
    infoCheck2: Yup
    .boolean(universalWords.required)
    .oneOf([true], universalWords.checkbox),
    infoCheck3: Yup
    .boolean(universalWords.required)
    .oneOf([true], universalWords.checkbox),
  });

  const onSubmit = (values)=>{
    
    //console.log('signIn step-5 submit edildi burada controller yapılacak',JSON.stringify(values))
    setDataSignUp({...values})
    navigate('/finish')
    console.log(formData)
    //navigate('/api/v1/register')
  }



  const formik = useFormik({
      initialValues:{...formData.sign_up},
      validationSchema,
      onSubmit
  })


  useEffect(() => {
    const pathname = window.location.pathname;  
    setStep(pathname.split('/')[pathname.split('/').length -1].split('-')[1])

    setButtonNext({active:false,URL:''})
    setButtonSubmit({title:'kayıt ol',active:true,URL:''});
    setButtonBack({title:'',active:true,URL:'sign-up/step-2'})

  },[]);

  return (
    <>
        <form onSubmit={formik.handleSubmit}>
          <p>Aşşağıda Bulunan Metinlerleri Onayladığımı Arz Ederim Bu Metinler Benim Üzerimde Tüm Haklarımı Elimden Alıyor Adeta Beni Çorak Bırakıyor</p>
          <Checkbox 
            name="infoCheck1" 
            label="Açık Rıza Metnini Okudum Onayladım"
            modal={{
              name:'okModal',
              data:{
                title:'Açık Rıza Metnini Okudum Onayladım',
                body:contract[0].body
              }
            }}
            {...formik.getFieldProps('infoCheck1')}
            checked={formik.values.infoCheck1}
            touch={formik.touched.infoCheck1} 
            error={formik.errors.infoCheck1}
          >
          </Checkbox>
          <Checkbox 
            name="infoCheck2" 
            label="Uzak Mesafe Sözleşmesini Okudum Onayladım"
            modal={{
              name:'okModal',
              data:{
                title:'Uzak Mesafe Sözleşmesini Okudum Onayladım',
                body:contract[1].body
              }
            }}
            {...formik.getFieldProps('infoCheck2')}
            checked={formik.values.infoCheck2}
            touch={formik.touched.infoCheck2} 
            error={formik.errors.infoCheck2}
          >
          </Checkbox>
          <Checkbox 
            name="infoCheck3" 
            label="Her Türlü Bilgimi Alabilir Başka yerde Kullanabilir"
            modal={{
              name:'okModal',
              data:{
                title:'Her Türlü Bilgimi Alabilir Başka yerde Kullanabilir',
                body:contract[2].body
              }
            }}
            {...formik.getFieldProps('infoCheck3')}
            checked={formik.values.infoCheck3}
            touch={formik.touched.infoCheck3} 
            error={formik.errors.infoCheck3}
            >
          </Checkbox>
          <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
        </form>
    </>
  )
}

export default Index
