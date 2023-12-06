import React,{useEffect,useState} from 'react'
import { useOutletContext } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from  'yup' 
import OtpInput from 'react-otp-input';

import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'

import { setDataSignIn, setStep } from '../../../../store/controls/actions';


const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const [isInfo,setIsInfo] = useState(false)
  const [otp, setOtp] = useState('');

  const initialValues = {
    //step 4
    phoneCode:''
  }

  const validationSchema = Yup.object({
    phoneCode: Yup
    .number()
    .test('exact-length', 'kod numarası 6 karakter olmalıdır', value => {
      if(!value.length === 6){
        return this.createError({message:'kod eksik'})
      }
    })
  });

  const onSubmit = (values)=>{
    console.log('signIn step-4 submit edildi burada controller yapılacak')
    console.log(JSON.stringify(values))
    setDataSignIn({...values})
  }

  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
  })

  const handleOtpChange = (otp) => {
    setOtp(otp);
    
    formik.handleChange({ target: { name: 'phoneCode', value: otp } });
  };
  console.log(formik.values.phoneCode)
  

  useEffect(() => {
    const pathname = window.location.pathname;
    setStep(pathname.split('/')[pathname.split('/').length -1].split('-')[1])

    setButtonNext({title:'',active:true,disabled:false,URL:'sign-in/step-5'})
    setButtonBack({title:'',active:true,URL:'sign-in/step-3'})
    setButtonSubmit({title:'kayıt ol',active:false,URL:''});
  },[]);

  return (
    <>          
        <form onSubmit={formik.handleSubmit}>
          <p>SMS Olarak Gelen Kodu Kutucuklara Gir</p>
          <div className='otp-input-class'>
            <OtpInput

              inputType='number'
              numInputs={6}
              value={formik.values.phoneCode}
              onChange={handleOtpChange}
              renderSeparator={<div style={{height:'100%',margin:'5px'}}></div>}
              renderInput={(props) => 
              <>
                <input name='phoneCode' {...props} style={(formik.errors?.phoneCode) ? {border:'2px solid red'} : null} className='x-button' />
              </>}
            />
          </div>
          <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
        </form>
    </>
  )
}

export default Index
