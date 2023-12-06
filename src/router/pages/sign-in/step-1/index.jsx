import React,{useEffect} from 'react'
import { useOutletContext } from 'react-router';
import { useFormik } from 'formik';
import * as Yup from 'yup'

import {setButtonSubmit,setButtonBack,setButtonNext} from '../../../../store/buttons/actions'
import {setDataSignIn, setStep} from '../../../../store/controls/actions'

import Text from '../../../../components/forms/text';
import Select from '../../../../components/forms/select';

import * as date from '../../../../utils/consts/date'
import {gender} from '../../../../utils/consts/gender'
import {location} from '../../../../utils/helpers/location'

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 

  const currentYear = (new Date()).getFullYear()
  let days;

  const initialValues = {
      //step 1
      name:'',
      surname:'',
      date:{
        day:date.days[0],
        moon:date.moons[0],
        year:currentYear
      },
      gender:gender[0],
      
  }
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
    console.log('signIn step-1 submit edildi burada controller yapılacak')
    console.log(JSON.stringify(values))
    setDataSignIn({...values})
  }

  const formik = useFormik({    
      initialValues,
      validationSchema,
      onSubmit
  })

  const yearControl = formik.values.date.year % 4 === 0;

  
  useEffect(() => {
    setStep(location.split('-')[1])

    setButtonNext({title:'',active:true,disabled:false,URL:'sign-in/step-2'})
    setButtonBack({title:'login',active:true,URL:'/'});
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
                onChange={(e) => {
                  formik.setFieldValue('date.year', e.target.value);
                  //formik.handleChange(e);
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
