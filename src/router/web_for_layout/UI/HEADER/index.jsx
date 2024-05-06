import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import AtomusLoading from '../../../../component/loading/atomusLoading'

import { useLoading } from '../../../../store/app/index/hooks'

import logoKargomucuz from '../../../../media/images/logo-kargomucuz.png'

const HEADER = ({ children,...props }) => {
  const translation = useTranslation()
  const loading = useLoading()

  return (
    <header id="layout" className='p-relative w-100 d-flex p-0 top-0'>
      <div className="loading">
        <AtomusLoading loadingState={loading} logo={logoKargomucuz}></AtomusLoading>
      </div>
    </header>
  )
}

export default HEADER