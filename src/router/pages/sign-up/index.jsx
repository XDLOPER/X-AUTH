  import React,{useEffect} from 'react'
  import { useOutletContext ,Link,useNavigate } from 'react-router-dom'
  import { useFormik } from 'formik'
  import * as Yup from 'yup'

  import { useData } from '../../../store/controls/hooks.js'
  import { setDataSignUp } from '../../../store/controls/actions.js'
  import {setMainTitle} from '../../../store/app/actions.js'
  import {setButtonBack,setButtonNext,setButtonSubmit} from '../../../store/buttons/actions.js'

  import Text from '../../../components/forms/text'
  import Checkbox from '../../../components/forms/checkbox'

const SignUp = ({context}) => {
  // outlet context ine erişip yukardaki state i değiştirebiliyoruz kullanım outletContext() = setFormData() yukarıdaki state'i güncelliyo 
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const navigate = useNavigate()
  const formData = useData()
  
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
    setDataSignUp({...values})
    console.log(formData)
  }

  const formik = useFormik({
    initialValues:{...formData.sign_up},
    validate,
    validationSchema,
    onSubmit
  })

  useEffect(()=>{
    setMainTitle('oturum aç')

    setButtonBack({active:false})
    setButtonSubmit({title:'oturum aç',active:true})
    setButtonNext({active:false})
  },[])
  
    return (
      <>
            <form onSubmit={formik.handleSubmit}>
                  <Text name="usernameAndPhone" type="text" placeholder="username & phone" value={formik.values.usernameAndPhone} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.usernameAndPhone} error={formik.errors.usernameAndPhone} />
                  <Text name="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
                  <Checkbox
                    name="dontForgetMe" 
                    label="don't forget me"
                    modal={{
                      name:'okModal',
                      data:{
                        title:'hesabını açık tutuyoruz',
                        body:'dont forget me'
                      }
                    }}
                    {...formik.getFieldProps('dontForgetMe')}
                    checked={formik.values.dontForgetMe}
                    touch={formik.touched.dontForgetMe} 
                    error={formik.errors.dontForgetMe}
                  />
                  <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
            </form> 
              <br />
              <br />
            <Link to="/sign-in" style={{textAlign:"center",position:"absolute",left:"50%",transform:"translate(-50%)"}}>kayıt ol</Link>
      </>
    )
}

  export default SignUp
