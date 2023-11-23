import React,{useEffect,useMemo} from 'react'
import { useFormik } from 'formik';
import country from 'country-list-js';

import {setButtonSubmit,setButtonBack,setButtonNext, setMainTitle} from '../../../../store/app/actions'
import {useButtonBackTitle,useButtonSubmitTitle,useButtonNextTitle} from '../../../../store/app/hooks'

import Select from '../../../../components/forms/select';
import Text from '../../../../components/forms/text';


const Index = () => {
  
    const countryName = country.names();
    const countryArray = countryName.map((value,index)=>{
        const finded = country.findByName(value)
        return /*finded.code.iso2 + ' : ' + */'+'+finded.dialing_code
    })
    console.log(country.findByName('Bangladesh'))
    const initialValues = {
        //step 3
        country:'',
        phone:''
    }

  const onSubmit = (values)=>{console.log(JSON.stringify(values))}

  const formik = useFormik({
      initialValues,
      onSubmit
  })

  useEffect(() => {
    setButtonNext({title:'',active:true,URL:'sign-in/step-4'})
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
                                data={countryArray}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                }}
                                onBlur={formik.handleBlur}
                                touch={formik.touched?.country} 
                                error={formik.errors?.country}
                            >
                </Select>
                <Text name="phone" type="number" placeholder="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched?.phone} error={formik.errors?.phone}/>
            </div>
        </form>
    </>
  )
}

export default Index
