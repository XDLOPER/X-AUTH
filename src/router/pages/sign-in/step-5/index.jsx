import React,{useEffect} from 'react'
import { useFormik } from 'formik';

import {setButtonSubmit,setButtonBack,setButtonNext, setMainTitle} from '../../../../store/app/actions'

import Checkbox from '../../../../components/forms/checkbox';

const Index = () => {

  const initialValues = {
      //step 5
      infoCheck1:false,
      infoCheck2:false,
      infoCheck3:false,
  }

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      onSubmit
  })

  useEffect(() => {
    setButtonNext({title:'back',active:false,URL:''})
    setButtonBack({title:'',active:true,URL:'sign-in/step-4'})
    setButtonSubmit({title:'kayıt ol',active:true,URL:''});
  },[]);

  return (
    <>          
        <form onSubmit={formik.handleSubmit}>
          <p>Aşşağıda Bulunan Metinlerleri Onayladığımı Arz Ederim Bu Metinler Benim Üzerimde Tüm Haklarımı Elimden Alıyor Adeta Beni Çorak Bırakıyor</p>
          <Checkbox label="Açık Rıza Metnini Okudum Onayladım"></Checkbox>
          <Checkbox label="Uzak Mesafe Sözleşmesini Okudum Onayladım"></Checkbox>
          <Checkbox label="Her Türlü Bilgimi Alabilir Başka yerde Kullanabilir"></Checkbox>
        </form>
    </>
  )
}

export default Index
