import React,{ useEffect, useState } from 'react'
import { useNavigate, useLocation, useOutletContext } from 'react-router'
import { useTranslation } from 'react-i18next'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { fadeIn } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

import { useData } from '../../store/controls/hooks'
import {setButtonBack, setButtonNext} from '../../store/buttons/actions'
import {setDataSignUp, setPage} from '../../store/controls/actions'

import Text from '../../component/forms/text/x-text'
import Select from '../../component/forms/x-select'

import * as date from '../../utils/consts/date'
import { gender } from '../../utils/consts/gender'

const Index = ({context}) => {
    const [days, setDays] = useState()
    const [buttonFormDataSubmitRef] = useOutletContext(context) 
    const navigate = useNavigate()
    const location = useLocation()
    const translation = useTranslation()
    const formData = useData()
    
    const styles = StyleSheet.create({
      effect: {
        animationName: fadeIn,
        animationDuration: '1s'
      }
    })

    const validationSchema = Yup.object({
        name:Yup
            .string(translation.t('form.messages.invalidCharacter'))
            .matches(/^[a-zA-ZçğıiöşüĞİÖŞÜÇ]+(\s[a-zA-ZçğıiöşüĞİÖŞÜÇ]+)?$/, translation.t('form.messages.invalidSpecialCharacter'))
            .required(translation.t('form.messages.required')),  

        surname:Yup
            .string(translation.t('form.messages.invalidCharacter'))
            .matches(/^[a-zA-Z0-9ğüşöçıİĞÜŞÖÇı]+$/, translation.t('form.message.invalidSpecialCharacter')),

        date:Yup.object({
            day:Yup
            .number(translation.t('form.messages.invalidCharacter'))
            .required(translation.t('form.messages.required')),

            moon:Yup
            .string(translation.t('form.messages.invalidCharacter'))
            .required(translation.t('form.messages.required')),
            
            year:Yup
            .number(translation.t('form.messages.invalidCharacter'))
            .required(translation.t('form.messages.required')),

        }),

        gender:Yup
            .string(translation.t('form.messages.invalidCharacter'))
            .required(translation.t('form.messages.required')),
    })

    const onSubmit = (values) => {
    
      //console.log('signIn step-1 submit edildi burada controller yapılacak',JSON.stringify(values))
      setDataSignUp({...values})
      navigate('/sign-up/authorization-information')
    
    }
  
    const formik = useFormik({    
        initialValues:{...formData.signUp},
        validationSchema,
        onSubmit
    })
  
    const moons = date.moons?.map(moon => ({title:moon.title,value:moon.value}))
    const years = [...date?.years].reverse()
  
    useEffect(() => {

        const updatedDays = date.days.filter((dayObj) => { // => day generate reaction 
            const findMoon = date?.moons.find((moon) => String(moon?.value) === String(formik.values.date?.moon))

            if(findMoon?.value === date.moons[1]?.value){ // => return (day) object 
                if(
                  formik.values.date?.year % 4 === 0
                ){
                  if(dayObj.value <= findMoon?.day[1]){
                    return dayObj
                  }
                }
                else{
                  if(dayObj.value <= findMoon?.day[0]){
                    return dayObj
                  }
                }
              }
    
              if(dayObj.value <= findMoon?.day){
                return dayObj
              }
      
        })
    
        setDays(updatedDays)
    }, [formik.values.date?.moon, formik.values.date?.year])
  
    useEffect(() => {
        setPage(location.pathname)
        
        setDays(date.days)

        setButtonBack({URL:'/',title:''})
        setButtonNext({URL:'',active:true,disabled:false})
    },[])
  
    return (
      <>          
        <form onSubmit={formik.handleSubmit} className={css(styles.effect)}>
            
            <div style={{display:"flex",gap:'10px'}}>
                <div style={{height:'45px',marginBottom:'15px',flex:'1'}}>
                    <Text
                        name="name" 
                        type="text" 
                        placeholder={translation.t('form.placeholder.name')}
                        value={formik.values.name} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        touch={formik.touched?.name} 
                        error={formik.errors?.name}
                    />
                </div>
                <div style={{height:'45px',marginBottom:'15px',flex:'1'}}>
                    <Text
                        name="surname" 
                        type="text" 
                        placeholder={translation.t('form.placeholder.surname')} 
                        value={formik.values.surname} 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        touch={formik.touched?.surname} 
                        error={formik.errors?.surname}
                    />
                </div>

            </div>
            <div style={{display:"flex",gap:'10px'}}>
                <div style={{height:'45px',marginBottom:'15px',flex:'1'}}>
                    <Select
                        name="date.day"
                        data={days}
                        value={formik.values.date?.day}
                        onChange={(e) => {
                            formik.handleChange(e)
                        }}
                        onBlur={formik.handleBlur}
                        touch={formik.touched?.date?.day} 
                        error={formik.errors?.date?.day}
                    >
                    </Select>
                </div>
                <div style={{height:'45px',marginBottom:'15px',flex:'1'}}>
                    <Select
                        name="date.moon"
                        data={moons}
                        value={formik.values.date?.moon}
                        onChange={(e) => {
                            formik.handleChange(e)
                        }}
                        onBlur={formik.handleBlur}
                        touch={formik.touched?.date?.moon} 
                        error={formik.errors?.date?.moon}
                    >
                    </Select>
                </div>
                <div style={{height:'45px',marginBottom:'15px',flex:'1'}}>
                    <Select
                        name="date.year"
                        data={years}
                        value={formik.values.date?.year}
                        onChange={(e) => {
                            formik.setFieldValue('date.year', e.target.value)
                        }}
                        onBlur={formik.handleBlur}
                        touch={formik.touched?.date?.year} 
                        error={formik.errors?.date?.year}
                    >
                    </Select>
                </div>
            </div>
            <div style={{display:"flex",gap:'10px'}}>
                <div style={{height:'45px',marginBottom:'15px',flex:'1'}}>
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
                </div>
            </div>
            <button type='submit' style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
        </form>  
      </>
    )
}

export default Index
