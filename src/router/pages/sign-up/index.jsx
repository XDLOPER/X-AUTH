  import React,{useEffect} from 'react'
  import { Link,useOutletContext  } from 'react-router-dom'
  import { useFormik,Formik as LoginForm,Form ,Field} from 'formik'
  import * as Yup from 'yup'

  import SubmitButton from '../../../components/buttons/submit'
  import Text from '../../../components/forms/text'
  import Checkbox from '../../../components/forms/checkbox'

const SignUp = (props) => {
  const context = useOutletContext();
   
  const initialValues = {
      usernameAndPhone:"",
      password:""
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

  useEffect(() => {
    console.log(context(formik.values))
  },[formik.values])

    return (
      <div>
        <div className="wrapper">
          <h1 className='auth-title'>oturum aç</h1>

          <div className="content">
              <br /><br />
              <form onSubmit={formik.handleSubmit}>
                  <Text name="usernameAndPhone" type="text" placeholder="username & phone" value={formik.values.usernameAndPhone} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.usernameAndPhone} error={formik.errors.usernameAndPhone}/>
                  <Text name="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
              </form>             

            <Checkbox label="not forget me"></Checkbox>
              <br />
              <br />
            <Link to="/sign-in" style={{textAlign:"center",position:"absolute",left:"50%",transform:"translate(-50%)"}}>kayıt ol</Link>
          </div>
        
        </div>
      </div>
    )
}

  export default SignUp
