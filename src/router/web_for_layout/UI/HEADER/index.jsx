import React, { useEffect, useState } from 'react'
import {useTranslation} from 'react-i18next'

import {setRightSidebarOpen,setRightSidebarType,setLeftSidebarOpen, setLeftSidebarType} from '../../../../store/app/index/actions'
import {useAuth} from '../../../../store/app/index/hooks'

import {APP_MENU_CONST} from '../../../../utils/consts/menus/app.menu'

const HEADER = ({ children,...props }) => {
  const { visible, open, menuOpen, ...rest} = props
  const translation = useTranslation()
  const isAuth = useAuth()

  return (
    <header id="header" className='container-fluid p-0' style={visible ? {"overflow":"hidden"} : {}}>
      {
        open &&
          <></>
      }

      {
        menuOpen && 
          <></>
      }
    </header>
  );
};

export default HEADER