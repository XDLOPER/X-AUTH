import React from 'react'
import { Link } from 'react-router-dom'

const SubmitButton = (props) => {
  const {children,to,on} = props
  return (
    <Link to={to} style={{display:(on === true) ? 'block' : 'none'}}><button {...props} disabled={on ? false : true} className='button-submit x-button'>{children}</button></Link>
  )
}

export default SubmitButton
