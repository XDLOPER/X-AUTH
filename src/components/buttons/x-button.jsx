import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({props}) => {
  const {children,to,on,disabled,...rest} = props

  return (
    <button disabled={((disabled || !on) === true) ? true : false} style={{cursor:(on === true) ? null : 'default'}} className='x-button' {...rest}>{children}</button>
  )
}

const X_button = (props) => {
  const {to,on} = props

  return <>

    {
      to !== '' && on ?
        (
        <Link to={(on === true) ? to : null} style={{opacity:(on === true) ? 1 : 0}}>
          <Button props={props}></Button>
        </Link>
        )
      :
      (
          <a style={{opacity:(on === true) ? 1 : 0}}><Button props={props}></Button></a>
      )

    }

  </>
}

export default X_button
