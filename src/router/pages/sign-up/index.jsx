import React from 'react'
import { Link } from 'react-router-dom'
import SubmitButton from '../../../components/buttons/submit'
import Text from '../../../components/forms/text'
import Checkbox from '../../../components/forms/checkbox'

const SignUp = () => {
  return (
    <div>
      <div className="wrapper">
        <h1 className='auth-title'>oturum aç</h1>

        <div className="content">
            <br /><br /><br />  
          <Text type="text" placeholder="username & email"></Text>
          <Text type="password" placeholder="password"></Text>
            <br />
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
