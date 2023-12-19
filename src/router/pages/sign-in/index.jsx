  import React,{useEffect} from 'react'
  import { useOutletContext ,Link,useNavigate } from 'react-router-dom'
  import { useFormik } from 'formik'
  import * as Yup from 'yup'

  import { useData } from '../../../store/controls/hooks.js'
  import { setDataSignIn } from '../../../store/controls/actions.js'
  import { useDataUniversalWords } from '../../../store/app/hooks.js'
  import {setLoading, setMainTitle} from '../../../store/app/actions.js'
  import {setButtonBack,setButtonNext,setButtonSubmit} from '../../../store/buttons/actions.js'

  import Text from '../../../components/forms/text.jsx'
  import Checkbox from '../../../components/forms/checkbox.jsx'

  import {examplefetch} from '../../../utils/helpers/exampleFetch'


const SignIn = ({context}) => {
  // outlet context ine erişip yukardaki state i değiştirebiliyoruz kullanım outletContext() = setFormData() yukarıdaki state'i güncelliyo 
  const [buttonFormDataSubmitRef] = useOutletContext(context) 
  const formData = useData()
  const navigate = useNavigate()
  const universalWords = useDataUniversalWords().forms

  const validationSchema = Yup.object({
    usernameAndEmail:Yup
    .string(universalWords.validCharacter)
    .matches(/^[a-zA-Z0-9.\-_]+$/, universalWords.username.privateCharacter)
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

    console.log(formData)

    examplefetch().then((result)=>{
      setLoading(false)
      setButtonSubmit({disabled:false})
      navigate('/finish')
    }).catch((error) => {alert(error?.message)});


  }

  const formik = useFormik({
    initialValues:{...formData.sign_in},
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
                  <Text name="usernameAndEmail" type="text" placeholder="username & email" value={formik.values.usernameAndEmail} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.usernameAndEmail} error={formik.errors.usernameAndEmail} />
                  <Text name="password" type="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} touch={formik.touched.password} error={formik.errors.password}/>
                  <Checkbox
                    name="dontForgetMe" 
                    label="don't forget me"
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
