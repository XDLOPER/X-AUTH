import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'
import { setStep } from '../../../../store/sign-in/actions';

import Checkbox from '../../../../components/forms/checkbox';

import { contract } from '../../../../utils/consts/contract';

const Index = () => {

  const initialValues = {
      //step 5
      infoCheck1:false,
      infoCheck2:false,
      infoCheck3:false,
  }

  const validationSchema = Yup.object({
    infoCheck1: Yup
    .boolean()
    .oneOf([true], 'Açık Rıza Metni Onaylanmalıdır'),
    infoCheck2: Yup
    .boolean()
    .oneOf([true], 'Açık Rıza Metni Onaylanmalıdır'),
    infoCheck3: Yup
    .boolean()
    .oneOf([true], 'Açık Rıza Metni Onaylanmalıdır'),
  });

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
  })

  useEffect(() => {
    const pathname = window.location.pathname;  
    setStep(pathname.split('/')[pathname.split('/').length -1].split('-')[1])

    setButtonNext({title:'back',active:false,URL:''})
    setButtonBack({title:'',active:true,URL:'sign-in/step-2'})
    setButtonSubmit({title:'kayıt ol',active:true,disabled:true,URL:''});
  },[]);
  console.log(formik.errors)

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
        </form>
    </>
  )
}

export default Index
