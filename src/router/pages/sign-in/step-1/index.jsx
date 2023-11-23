import React,{useEffect} from 'react'
import { useOutletContext } from 'react-router';
import { useFormik } from 'formik';
import path,{dirname} from 'path-browserify'

import {setButtonSubmit,setButtonBack,setButtonNext, setMainTitle} from '../../../../store/app/actions'
import {useButtonBackTitle,useButtonSubmitTitle,useButtonNextTitle} from '../../../../store/app/hooks'

import Text from '../../../../components/forms/text';
import Select from '../../../../components/forms/select';

import * as date from '../../../../utils/consts/date'
import {gender} from '../../../../utils/consts/gender'

const Index = () => {
  
  const currentYear = (new Date()).getFullYear()
  const initialValues = {
      //step 1
      name:'',
      surname:'',
      date:{
        day:'1',
        moon:'mayıs',
        year:currentYear
      },
      gender:'',

      //step 3
      country:'',
      phone:'',

      //step 4
      infoCheck:false,
      
  }

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      onSubmit
  })

  useEffect(() => {
    setButtonNext({title:'',active:true,URL:'sign-in/step-2'})
    setButtonBack({title:'login',active:true,URL:'/'});
  },[]);

  return (
    <>          
      <form onSubmit={formik.handleSubmit}>

            <div style={{display:"flex",gap:'10px'}}>
              <Text name="name" type="text" placeholder="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.name} error={formik.errors.name}/>
              <Text name="surname" type="text" placeholder="surname" value={formik.values.surname} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.surname} error={formik.errors.surname}/>
            </div>
            <div style={{display:"flex",gap:'10px'}}>
              <Select
                name="day"
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
                name="moon"
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
                name="day"
                data={date.years}
                onChange={(e) => {
                  formik.handleChange(e);
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
      </form>  
    </>
  )
}

export default Index
