import React,{useState} from 'react'
import {useTranslation} from 'react-i18next'

const FOOTER = ({children,...props}) => {
  const {visible, open, ...rest} = props
  const translation = useTranslation()

  return (
    <footer id="footer" className='container-fluid p-0' style={{ ...(!open && { height: "0" }), ...(visible && { overflow: "hidden" }) }}>
      {
        open &&
          <></>
      }
    </footer>
  )
}

export default FOOTER
