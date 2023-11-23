import React,{useEffect,useState} from 'react'
import { useFormik } from 'formik';
import OtpInput from 'react-otp-input';

import {setButtonSubmit,setButtonBack,setButtonNext, setMainTitle} from '../../../../store/app/actions'
import {useButtonBackTitle,useButtonSubmitTitle,useButtonNextTitle} from '../../../../store/app/hooks'

import Text from '../../../../components/forms/text';

const Index = () => {
  const [otp, setOtp] = useState('');

  const initialValues = {
    //step 4
    phoneCode:''
  }

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      onSubmit
  })

  const handleOtpChange = (otp) => {
    setOtp(otp);
    
    formik.handleChange({ target: { name: 'phoneCode', value: otp } });
  };
  console.log(formik.values.phoneCode)
  

  useEffect(() => {
    setButtonNext({title:'',active:true,URL:'sign-in/step-5'})
    setButtonBack({title:'',active:true,URL:'sign-in/step-3'})
    setButtonSubmit({title:'kayıt ol',active:false,URL:''});
  },[]);

  return (
    <>          
        <form onSubmit={formik.handleSubmit}>
          <p>SMS Olarak Gelen Kodu Kutucuklara Gir</p>
          <div className='otp-input-class'>
            <OtpInput
              name="phoneCode"
              inputType='number'
              numInputs={6}
              value={formik.values.phoneCode}
              onChange={handleOtpChange}
              renderSeparator={<div style={{height:'100%',margin:'5px'}}></div>}
              renderInput={(props) => <input {...props} className='x-button' />}
            />
          </div>
        </form>
    </>
  )
}

export default Index
