import React from 'react'
import { Link } from 'react-router-dom'

const SubmitButton = ({children,to,on}) => {
  return (
    <Link to={to}><button style={{opacity:on ? 1 : 0}} disabled={on ? true : false} className='button-submit x-button'>{children}</button></Link>
  )
}

export default SubmitButton
