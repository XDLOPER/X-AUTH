  import React,{useEffect} from 'react'
  import { Link } from 'react-router-dom'
  import { useFormik,Formik as LoginForm,Form ,Field} from 'formik'
  import * as Yup from 'yup'

  import {setMainTitle} from '../../../store/app/actions.js'
  import {setButtonBack,setButtonNext,setButtonSubmit} from '../../../store/buttons/actions.js'
  import Text from '../../../components/forms/text'
  import Checkbox from '../../../components/forms/checkbox'

const SignUp = (props) => {

  const initialValues = {
      usernameAndPhone:"",
      password:"",
      dontForgetMe:""
  }

  const validate = (values)=>{
      let errors = {}

      if(values.usernameAndPhone.length < 3){
          errors.usernameAndPhone = "required the three characters"
      }

      return errors
  }

  const validationSchema = Yup.object({
      password:Yup.string().required('Required')
  })

  const onSubmit = (values) => {
      console.log(values)
  }

  const formik = useFormik({
    initialValues,
    validate,
    validationSchema,
    onSubmit
  })

  const handleButtonSubmit = () => {
    // Formik'in içindeki submitForm fonksiyonunu çağırarak formu submit et
    formik.submitForm();
  };
  useEffect(()=>{
    setMainTitle('oturum aç')

    setButtonBack({active:false,URL:''})
    setButtonSubmit({title:'oturum aç',active:true,disabled:true,URL:'/'})
    setButtonNext({active:false,URL:''})
  },[])
    return (
      <>
            <form onSubmit={formik.handleSubmit}>
                  <Text name="usernameAndPhone" type="text" placeholder="username & phone" value={formik.values.usernameAndPhone} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.usernameAndPhone} error={formik.errors.usernameAndPhone} />
                  <Text name="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
                  <Checkbox
                    name="infoCheck1" 
                    label="don't forget me"
                    modal={{
                      name:'okModal',
                      data:{
                        title:'hesabını açık tutuyoruz',
                        body:'dont forget me'
                      }
                    }}
                    {...formik.getFieldProps('infoCheck1')}
                    checked={formik.values.dontForgetMe}
                    touch={formik.touched.dontForgetMe} 
                    error={formik.errors.dontForgetMe}
                  />
            </form> 
              <br />
              <br />
            <Link to="/sign-in" style={{textAlign:"center",position:"absolute",left:"50%",transform:"translate(-50%)"}}>kayıt ol</Link>
      </>
    )
}

  export default SignUp
