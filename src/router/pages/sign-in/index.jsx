import React,{useEffect, useState} from 'react'
import { Outlet, useNavigate } from 'react-router';



function SignIn() {
  const navigate = useNavigate()
  const URL = window.location.pathname

  // İlk başta sign-in layout gözükmesin diye step-1 e yönlendiriyoruz 
  useEffect(() => {
    const lastSegment = URL.split('/').pop();
    if (lastSegment === 'sign-in') {
      navigate('step-1');
    }
  }, [URL, navigate]);

  return (
    <div>
    <div className="wrapper">
      <h1 className='auth-title'>kayıt ol</h1>

      <div className="content">
          <br /><br />
            <Outlet/>           
          <br />
          <br />
          <br />
      </div>
    
    </div>
  </div>
  );
}

/*
    <div className="App">
      <div className="wrapper">
        <div className="auth">
        {
          login ?
          <>
            <input type="text" key="4" name="username" value={authForm.username} onChange={onChangeHandler} placeholder="username/email"/>
            <input type="text" key="5" name="password" value={authForm.password} onChange={onChangeHandler} placeholder="parola"/>
            <button type="button" onClick={(e)=>{onClickHandler(authForm,setLogin,'login',e)}}>giriş yap</button>
          </>
           : 
          <>
            <input type="text" key="1" name="username" value={authForm.username} onChange={onChangeHandler} placeholder="username"/>
            <input type="text" key="2" name="email" value={authForm.email} onChange={onChangeHandler} placeholder="email"/>
            <input type="text" key="3" name="password" value={authForm.password} onChange={onChangeHandler} placeholder="parola"/>
            <button type="button" key="4" onClick={(e)=>{onClickHandler(authForm,setLogin,'register',e)}}>kayıt ol</button>
          </>
        }
        {
          login ?
            <button onClick={(e)=>setLogin((false))}>kayıt olmak için tıkla</button>
          :
            <button onClick={(e)=>setLogin((true))}>giriş yapmak için</button>
        }
        </div>
      </div>
    </div>
*/

export default SignIn
