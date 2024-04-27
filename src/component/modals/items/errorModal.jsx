import React from 'react'
import { Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import XButton from '../../buttons/x-button'
  
import { setModalAppend, setModalDestroy } from '../../../store/app/modals/actions'

const ErrorModal = (props) => {
    const {modalData} = props
    const {ID} = modalData
    const translation = useTranslation()


    return (
      <>
              <Modal.Body>{modalData.data.body}</Modal.Body>

        </>
    )
}

export default ErrorModal
