import React,{useState} from 'react'
import {useTranslation} from 'react-i18next'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { IoChevronDownOutline } from "react-icons/io5"

import XButton from '../../../../component/buttons/x-button'

import { useButtons } from '../../../../store/buttons/hooks'
import { useCompany } from '../../../../store/project/hooks'

import logo from '../../../../media/images/logo.png'

import { buttonType } from "../../../../utils/enums/enun.buttons"

const FOOTER = ({children,...props}) => {
  const {buttonsRef, ...rest} = props

  const translation = useTranslation()
  const layoutbButtons = useButtons()
  const company = useCompany()

  return (
    <footer id="layout" className='w-100 p-relative bottom-0 p-0'>
      <div className="buttonGroup d-grid overflow-hidden">
        {
          layoutbButtons?.map((value,index) => LayoutButtonRender({key:index,ref:buttonsRef,...value}))
        }
      </div>
      <p className='footerCompanyText mb-0'>by<img className='footerCompanyLogo' src={logo} alt="x" />{company.name}</p>
    </footer>
  )
}

const LayoutButtonRender = (props) => {
  const { key, ref, type, active, disabled, URL, title } = props

  const childrenRender = (type, title) => {
    switch (type) {
      case buttonType.left:
        return (
          (title === "") ? <BsArrowLeft/> : title
        )
      case buttonType.center:
        return (
          (title === "") ? <IoChevronDownOutline/> : title
        )
      case buttonType.right:
        return (
          (title === "") ? <BsArrowRight/> : title
        )
    }
  }

  const layoutButtonsTrigger = (events,type) => {
    if(type !== buttonType.left && ref){
      ref?.current?.click()
    }
  }

  return <XButton
      key={key}
      type="submit"
      onClick={(e) => layoutButtonsTrigger(e,type)} 
      off={!active} 
      to={URL}
      disabled={disabled}
    >
      { childrenRender(type, title) }
    </XButton>
  
}

export default FOOTER
