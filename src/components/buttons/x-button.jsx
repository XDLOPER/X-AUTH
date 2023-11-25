import React from 'react'
import { Link } from 'react-router-dom'

const X_button = (props) => {
  const {children,to,on,disabled} = props
  return (
    <Link to={(on === true) ? to : null} style={{opacity:(on === true) ? 1 : 0}}><button {...props} disabled={((disabled || !on) === true) ? true : false} style={{cursor:(on === true) ? null : 'default'}} className='x-button'>{children}</button></Link>
  )
}

export default X_button
