import React,{useEffect,useMemo} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../store/buttons/actions'

import Text from '../../../components/forms/text';
import { setStep } from '../../../store/controls/actions';

const Index = () => {
    const initialValues = {
        //step 3
        email:''
    }

    const validationSchema = Yup.object({
        email: Yup
        .string()
        .required('Bu alan zorunludur'),
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

    setButtonNext({title:'',active:true,disabled:false,URL:'sign-in/step-4'})
    setButtonSubmit({title:'',active:false,URL:'sign-in/step-2'})
    setButtonBack({title:'',active:true,URL:'sign-in/step-2'});
  },[]);

  return (
    <>          
        <form onSubmit={formik.handleSubmit}>
            <div>
                <p>Şimdi Telefon Numaranı Gir Ve yola Devam Et Bir Sonraki Aşamada Telefonuna SMS ile Onay Kodu Gelicek</p>
                <Text 
                    name="email" 
                    type="email" 
                    placeholder="email"
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    touch={formik.touched?.email} 
                    error={formik.errors?.email}
                />
            </div>
        </form>
    </>
  )
}

export default Index
