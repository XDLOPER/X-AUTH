import React from 'react'
import { Link } from 'react-router-dom'
  
const SignOn = () => {
  return (
    <div>
      <div className="wrapper">
        <h1 className='auth-title'>oturum aç</h1>
        <Link to="/sign-in">sign in</Link>
      </div>
    </div>
  )
}

export default SignOn
