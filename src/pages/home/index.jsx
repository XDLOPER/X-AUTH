import React,{useState,useEffect} from 'react'
import { useTranslation } from 'react-i18next'

import XButton from '../../component/buttons/x-button'
import Hr from '../../component/hr'
import SearchBar from '../../component/searchBar'
import WebMenu from '../../component/webMenu'
import Avatar from '../../component/avatar';
import AnchorButton from '../../component/buttons/anchorButton'
import IconGenerate from '../../component/iconGenerate'
import DropdownMenu from '../../component/dropdownMenu'
import Text from '../../component/forms/text/x-text'
import Checkbox from '../../component/forms/x-checkbox'
import Select from '../../component/forms/x-select'
import Radio from '../../component/forms/x-radio'
import XRange from '../../component/forms/x-range'
import File from '../../component/forms/files/x-files'

import { useTheme } from '../../store/app/index/hooks'
import useSystemTheme from '../../hooks/systemTheme'

import {i18n} from '../../utils/language/index'
import {APP_MENU_CONST} from '../../utils/consts/menus/app.menu'
import avatar from '../../media/images/avatar.jpg'

import {createCookie} from '../../utils/helpers/cookie/createCookie'


const Home = () => {
  const translation = useTranslation()

  return (
    <div>

    </div>
  )
}

export default Home
