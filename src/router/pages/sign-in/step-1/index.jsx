import React,{useEffect} from 'react'
import { useOutletContext,useNavigate,useLocation } from 'react-router';

import { useFormik } from 'formik';
import * as Yup from 'yup'

import { useData } from '../../../../store/controls/hooks';
import {setButtonBack, setButtonNext} from '../../../../store/buttons/actions'
import {setDataSignIn, setStep} from '../../../../store/controls/actions'

import * as date from '../../../../utils/consts/date'
import {gender} from '../../../../utils/consts/gender'
import {location} from '../../../../utils/helpers/location'

import Text from '../../../../components/forms/text';
import Select from '../../../../components/forms/select';

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()

  const formData = useData()

  const validationSchema = Yup.object({
    name:Yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Sadece harf içermelidir')
    .required('Bu alan zorunludur'),  

    surname:Yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Sadece harf içermelidir'),

    date:Yup.object({
      day:Yup
      .number('geçerli bir değer girin')
      .min('3')
      .required('Bu alan zorunludur'),

      moon:Yup
      .string().typeError('hello'),
      
      year:Yup
      .string().typeError('hello'),
    }),

    gender:Yup
    .string().typeError('hello')
    
  })
  const onSubmit = (values)=>{

    //console.log('signIn step-1 submit edildi burada controller yapılacak',JSON.stringify(values))
    setDataSignIn({...values})
    navigate('/sign-in/step-2');

  }

  const formik = useFormik({    
      initialValues:{...formData.sign_in},
      validationSchema,
      onSubmit
  })

  const yearControl = formik.values.date.year % 4 === 0;

  
  useEffect(() => {
    setStep(location.split('-')[1])

    setButtonBack({URL:'/'})
    setButtonNext({active:true,disabled:false})
  },[]);

  return (
    <>          
      <form onSubmit={formik.handleSubmit}>
            
            <div style={{display:"flex",gap:'10px'}}>
              <Text
                name="name" 
                type="text" 
                placeholder="name" 
                value={formik.values.name} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                touch={formik.touched?.name} 
                error={formik.errors?.name}
              />
              <Text 
                name="surname" 
                type="text" 
                placeholder="surname" 
                value={formik.values.surname} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} 
                touch={formik.touched?.surname} 
                error={formik.errors?.surname}
              />
            </div>
            <div style={{display:"flex",gap:'10px'}}>
              <Select
                name="date.day"
                data={date.days}
                value={formik.values.date.day}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                touch={formik.touched?.date?.day} 
                error={formik.errors?.date?.day}
              >
              </Select>
              <Select
                name="date.moon"
                data={date.moons}
                value={formik.values.date.moon}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                touch={formik.touched?.date?.moon} 
                error={formik.errors?.date?.moon}
              >
              </Select>
              <Select
                name="date.year"
                data={date.years}
                value={formik.values.date.year}
                onChange={(e) => {
                  formik.setFieldValue('date.year', e.target.value);
                }}
                onBlur={formik.handleBlur}
                touch={formik.touched?.date?.year} 
                error={formik.errors?.date?.year}
              >
              </Select>
            </div>
            <Select
                name="gender"
                data={gender}
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touch={formik.touched?.gender} 
                error={formik.errors?.gender}
              >
            </Select>
            <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
      </form>  
    </>
  )
}

export default Index
