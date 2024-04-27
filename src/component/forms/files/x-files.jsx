import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import XButton from '../../buttons/x-button';

import { setModalAppend } from '../../../store/app/modals/actions';

const XFiles = ({ children,...props }) => {
  const { title,cover } = props

  const openModal = () => {

    setModalAppend({
      name:'fileModal',
      data:{
        title,
        body:{},  
        extra:{
          ...props
        }
      }
    })

  };

  return (
    <>
      <XButton to={''} className="XFileHandleButton" onClick={openModal} style={cover && {borderRadius:"9999px"} }>
        {children}
      </XButton>
    </>
  );
}

export default XFiles
