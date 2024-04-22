  import React,{useEffect} from 'react'
  import { useOutletContext ,Link,useNavigate } from 'react-router-dom'
  import { useFormik } from 'formik'
  import * as Yup from 'yup'
  import axios from 'axios'
  import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

  import { fadeIn } from 'react-animations'
import { StyleSheet, css } from 'aphrodite'

  import { useData } from '../../../store/controls/hooks.js'
  import { setDataSignIn } from '../../../store/controls/actions.js'
  import { useDataUniversalWords } from '../../../store/app/hooks.js'
  import {setDeleteErrors, setErrors, setLoading, setMainTitle} from '../../../store/app/actions.js'
  import {setButtonBack,setButtonNext,setButtonSubmit} from '../../../store/buttons/actions.js'

  import Text from '../../../components/forms/text.jsx'
  import Checkbox from '../../../components/forms/checkbox.jsx'

  import {examplefetch} from '../../../utils/helpers/exampleFetch'
  import { sentenceCutter } from '../../../utils/helpers/sentenceCutter.js'
  import X_button from '../../../components/buttons/x-button.jsx'
  


const SignIn = ({context}) => {
  // outlet context ine erişip yukardaki state i değiştirebiliyoruz kullanım outletContext() = setFormData() yukarıdaki state'i güncelliyo 
  const [buttonFormDataSubmitRef] = useOutletContext(context) // => butonun refine ulaşıyoruz
  const formData = useData()
  const navigate = useNavigate()
  const universalWords = useDataUniversalWords().forms

  const styles = StyleSheet.create({
    effect: {
      animationName: fadeIn,
      animationDuration: '1s'
    }
  })

  const validationSchema = Yup.object({
    usernameAndEmail:Yup
    .string(universalWords.validCharacter)
    .min(2, universalWords.twoCharacter)
    .matches(/^(?=(?:[^.]*\.){0,3}[^.]*$)(?=(?:[^-]*-){0,3}[^-]*$)(?=(?:[^_]*_){0,3}[^_]*$)(?=(?:[^@]*@){0,3}[^@]*$)[a-zA-Z0-9._@-]+$/,universalWords.username.privateCharacter)
    .required(universalWords.required),

    password:Yup
    .string(universalWords.validCharacter)
    .matches(/^[\s\S]{6,30}$/, universalWords.password)
    .required(universalWords.required),  
  })

  const onSubmit = (values) => {
    setLoading(true)
    setButtonSubmit({disabled:true})
    setDataSignIn({...values})

  // comunicate the backend
    const postData = {
      username:values.usernameAndEmail,
      email:formData.usernameAndEmail,
      password:values.password,
      dfm:values.dontForgetMe
    }

    /*
    fetch('https://api.kargomucuz.com/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(postData) 
    })
    .then(response => {
      console.log('data:'+ response)
      if (!response.success) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(response => {

      if(!response.data.success){
        setErrors({
          title:'error',
          body:{
            message:sentenceCutter(response.data?.message,50) 
          },
        }) 
      }else{
        if(values.dontForgetMe){
          
        }
        navigate('/finish')
      }

      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    .catch(error => {
      console.error(error);
      setErrors({
        title:'ERROR',
        body:{
          message:sentenceCutter(error?.message,50)
        },
      })
      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    */
    
    axios.post('https://api.kargomucuz.com/v1/auth/login', postData,{
      headers:{}
    })
    .then(response => {

      if(!response.data.success){
        setErrors({
          title:'error',
          body:{
            message:sentenceCutter(response.data?.message,50) 
          },
        }) 
      }else{
        if(values.dontForgetMe){
          
        }
        navigate('/finish')
      }

      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    .catch(error => {
      console.error(error);
      setErrors({
        title:'ERROR',
        body:{
          message:sentenceCutter(error?.message,50)
        },
      })
      setButtonSubmit({disabled:false})
      setLoading(false)
    })
    
  //


  }

  const formik = useFormik({
    initialValues:{...formData.signIn},
    validationSchema,
    onSubmit
  })

  useEffect(()=>{
    setMainTitle('oturum aç')
    setLoading(false)

    setDeleteErrors([])

    setButtonBack({active:false})
    setButtonSubmit({title:'oturum aç',active:true})
    setButtonNext({active:false})
  },[])

  useEffect(() => {
    console.log(formik.values)
  }, [formik.values])
  
    return (
      <>
            <form onSubmit={formik.handleSubmit} className={css(styles.effect)}>
                  <Text name="usernameAndEmail" type="text" placeholder="kullanıcı adı & e-posta" value={formik.values.usernameAndEmail} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.usernameAndEmail} error={formik.errors.usernameAndEmail} />
                  <Text name="password" type="password" placeholder="şifre" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
                  <Checkbox
                    name="dontForgetMe" 
                    label="Oturumu açık tut"
                    modal={{
                      name:'okModal',
                      data:{
                        title:'Hesabını Açık Tutuyoruz',
                        body:'Merhaba! Sana, hesabını güvenli bir şekilde korumak ve daha iyi bir hizmet sunabilmek adına bir bilgilendirme iletiyoruz. "Token" terimi, internet üzerindeki bilgi alışverişinde kullanılan şifrelenmiş bir kimlik bilgisini ifade eder. Hesabını açık tutabilmemiz ve seni daha iyi tanıyabilmemiz için bu bilgileri kullanıyoruz.\n\nBu tokenlar, kimlik doğrulama ve yetkilendirme süreçlerinde rol oynar, böylece yalnızca yetkili kişilerin hesaplarına erişim sağlanır. Senin güvenliğin bizim önceliğimizdir ve bu bilgilendirme, hesabını güvende tutmak adına attığımız adımlardan biridir. Eğer herhangi bir şüphen veya sorunun varsa, lütfen bize bildir. Teşekkür ederiz!'
                      }
                    }}
                    {...formik.getFieldProps('dontForgetMe')}
                    checked={formik.values.dontForgetMe}
                    touch={formik.touched.dontForgetMe} 
                    error={formik.errors.dontForgetMe}
                  />
                  <button style={{display:'none'}} ref={buttonFormDataSubmitRef}></button>
            </form> 

            <X_button to="/sign-up" on={true} style={{
                  height: "40px",
                  background: "linear-gradient(45deg, rgb(255 187 126), rgb(255 198 198 / 70%))",
                  width: "60%",
                  left: "50%",
                  top:"20px",
                  position: "relative",
                  transform: "translate(-50%)"
            }}>kayıt olmak için <BsArrowRight/></X_button>
      </>
    )
}

  export default SignIn
