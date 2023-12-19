import React,{useEffect,useState} from 'react'
import { useOutletContext,useNavigate } from 'react-router';

import { useFormik } from 'formik';
import * as Yup from 'yup'

import { useDataUniversalWords } from '../../../../store/app/hooks';
import { useData } from '../../../../store/controls/hooks';
import {setButtonBack, setButtonNext} from '../../../../store/buttons/actions'
import {setDataSignUp, setStep} from '../../../../store/controls/actions'

import * as date from '../../../../utils/consts/date'
import {gender} from '../../../../utils/consts/gender'
import {location} from '../../../../utils/helpers/location'

import Text from '../../../../components/forms/text';
import Select from '../../../../components/forms/select';

const Index = ({context}) => {
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const formData = useData()

  const universalWords = useDataUniversalWords().forms
  const [days, setDays] = useState(date.days);


  const validationSchema = Yup.object({
    name:Yup
    .string(universalWords.validCharacter)
    .matches(/^[a-zA-ZçğıiöşüĞİÖŞÜÇ]+(\s[a-zA-ZçğıiöşüĞİÖŞÜÇ]+)?$/, universalWords.privateCharacter)
    .required(universalWords.required),  

    surname:Yup
    .string(universalWords.validCharacter)
    .matches(/^[a-zA-Z]+$/, universalWords.privateCharacter),

    date:Yup.object({
      day:Yup
      .number(universalWords.validCharacter)
      .required(universalWords.required),

      moon:Yup
      .string(universalWords.validCharacter)
      .required(universalWords.required),
      
      year:Yup
      .string(universalWords.validCharacter)
      .required(universalWords.required),

    }),

    gender:Yup
    .string(universalWords.validCharacter)
    .required(universalWords.required),

    
  })
  const onSubmit = (values)=>{

    //console.log('signIn step-1 submit edildi burada controller yapılacak',JSON.stringify(values))
    setDataSignUp({...values})
    navigate('/sign-up/step-2');

  }

  const formik = useFormik({    
      initialValues:{...formData.sign_up},
      validationSchema,
      onSubmit
  })

  const moons = date.moons?.map(date => date?.name)
  const years = [...date?.years].reverse()

  useEffect(() => {
    const updatedDays = date.days.filter((day) => {
      const findMoonDay = date?.moons.find((value) => value?.name === formik.values.date?.moon);

          if(findMoonDay?.name === date.moons[1]?.name){
            if(
              formik.values.date?.year % 4 === 0
            ){
              if(day <= findMoonDay?.day[1]){
                return day
              }
            }
            else{
              if(day <= findMoonDay?.day[0]){
                return day
              }
            }
          }

          if(day <= findMoonDay?.day){
            return day
          }

      }
    );

    // gün state'ini güncelle yoksa class içindeki verileri okuyamıyor state değişimi yapamıyoruz
    setDays(updatedDays);
  }, [formik.values.date?.moon,formik.values.date?.year]);


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
                data={days}
                value={formik.values.date?.day}
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
                data={moons}
                value={formik.values.date?.moon}
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
                data={years}
                value={formik.values.date?.year}
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
