import React,{useEffect,useMemo} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import {setButtonSubmit,setButtonBack,setButtonNext, setMainTitle} from '../../../../store/app/actions'
import {useButtonBackTitle,useButtonSubmitTitle,useButtonNextTitle} from '../../../../store/app/hooks'
import {countryList,country} from '../../../../utils/helpers/country/findCountryInfo'

import Select from '../../../../components/forms/select';
import Text from '../../../../components/forms/text';
import { setStep } from '../../../../store/sign-in/actions';
import { findCountryPhoneLength } from '../../../../utils/helpers/country/findCountryPhoneLength';

const Index = () => {
    //console.log(countryList)

    const initialValues = {
        //step 3
        country:countryList[0].name,
        phone:''
    }

    const validationSchema = Yup.object({
        country: Yup.string(),
      
        phone: Yup
        .string()
        .test('missingPhoneNumber', 'Eksik telefon numarası', function(value) {
          const findCountry = country.findByName(this.parent?.country).code.iso2;
          const phoneLength = findCountryPhoneLength('US');
          console.log(phoneLength)
          if (value.length !== phoneLength) {
            return this.createError({ message: 'telefon numarası eksik!' });
          }
        }).required('Bu alan zorunludur'),
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
                <Select
                    name="country"
                    data={countryList.map(value => [value.name])}
                    onChange={(e) => {
                        formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    touch={formik.touched?.country} 
                    error={formik.errors?.country}
                >
                </Select>
                <Text 
                    name="phone" 
                    type="number" 
                    placeholder="phone"
                    value={formik.values.phone} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    touch={formik.touched?.phone} 
                    error={formik.errors?.phone}
                />
            </div>
        </form>
    </>
  )
}

export default Index
