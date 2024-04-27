import React,{useState} from 'react'
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub,AiFillApple } from 'react-icons/ai';


import Hr from './hr'
import OxyButton from './buttons/x-button'

const AuthCase = () => {
  const [haveAuth,setHaveAuth] = useState(true) 

  return (
    <>
    <h1>{haveAuth ? "Login" : "Register"}</h1>
      <h1>{haveAuth}</h1>
      {
        haveAuth ? 
        <>
              <Hr type="left" position='horizontal'/>
              <div class="input-group">
                <span class="input-group-text">username or email</span>
                <input type="text" aria-label="phone" class="form-control" placeholder='username or email'/>
              </div>
              <div class="input-group">
                <span class="input-group-text">şifre</span>
                <input type="text" aria-label="phone" class="form-control" placeholder='şifre'/>
              </div>

        </>
        : 
        <>
              <Hr type="left"/>
              <div class="input-group">
                <span class="input-group-text">email</span>
                <input type="text" aria-label="phone" class="form-control" placeholder='username'/>
              </div>
              <div class="input-group">
                <span class="input-group-text">şifre</span>
                <input type="text" aria-label="phone" class="form-control" placeholder='şifre'/>
              </div>

        </>
        
      }
      {
      <div className="btn-group" role="group">
{
  haveAuth ? 
  <>
    <OxyButton type="center">Login</OxyButton>  
    <OxyButton onClick={()=>{setHaveAuth(false)}} type="arrow">doun't you Register</OxyButton> 
  </>
  :
  <>
    <OxyButton type="center">Register</OxyButton>  
    <OxyButton onClick={()=>{setHaveAuth(true)}} type="arrow">Login</OxyButton>  
  </>
}

      </div>
      }
      <Hr type="center"/>
      <div class="btn-group">
        <OxyButton type="arrow" icon={<FcGoogle/>}>Google ile giriş yap</OxyButton>
        <OxyButton type="arrow" icon={<AiFillGithub/>}>Github ile giriş yap</OxyButton>
        <OxyButton type="arrow" icon={<AiFillApple/>}>Apple ile giriş yap</OxyButton>
      </div>

    </>
  )
}

export default AuthCase
