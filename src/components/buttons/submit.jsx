import React from 'react'
import { Link } from 'react-router-dom'

const SubmitButton = (props) => {
  const {children,to,on,} = props
  return (
    <Link to={to}><button {...props} style={{opacity:on ? 1 : 0}} disabled={on ? false : true} className='button-submit x-button'>{children}</button></Link>
  )
}

export default SubmitButton
