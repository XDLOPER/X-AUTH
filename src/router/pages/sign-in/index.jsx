  import React,{useEffect} from 'react'
  import { useOutletContext ,Link,useNavigate } from 'react-router-dom'
  import { useFormik } from 'formik'
  import * as Yup from 'yup'
  import axios from 'axios'

  import { useData } from '../../../store/controls/hooks.js'
  import { setDataSignIn } from '../../../store/controls/actions.js'
  import { useDataUniversalWords } from '../../../store/app/hooks.js'
  import {setDeleteErrors, setErrors, setLoading, setMainTitle} from '../../../store/app/actions.js'
  import {setButtonBack,setButtonNext,setButtonSubmit} from '../../../store/buttons/actions.js'

  import Text from '../../../components/forms/text.jsx'
  import Checkbox from '../../../components/forms/checkbox.jsx'

  import {examplefetch} from '../../../utils/helpers/exampleFetch'
  import { sentenceCutter } from '../../../utils/helpers/sentenceCutter.js'
  


const SignIn = ({context}) => {
  // outlet context ine erişip yukardaki state i değiştirebiliyoruz kullanım outletContext() = setFormData() yukarıdaki state'i güncelliyo 
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const formData = useData()
  const navigate = useNavigate()
  const universalWords = useDataUniversalWords().forms

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
      ...formData.signIn,...values,
      username:formData.signIn.usernameAndEmail,
      email:formData.signIn.usernameAndEmail
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
      
    axios.post('/auth/login', {
      ...postData
    },
    {
      headers: headers
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
  
    return (
      <>
            <form onSubmit={formik.handleSubmit}>
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
              <br />
              <br />
            <Link to="/sign-up" style={{textAlign:"center",position:"absolute",left:"50%",transform:"translate(-50%)"}}>kayıt ol</Link>
      </>
    )
}

  export default SignIn
