import React from 'react'
import { Modal } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import XButton from '../../buttons/x-button'
  
import { setModalAppend, setModalDestroy } from '../../../store/app/modals/actions'

const OkModal = (props) => {
    const { modalData } = props
    const { ID } = modalData
    const translation = useTranslation()

  
    return (
      <>
              <Modal.Body>{modalData.data.body}</Modal.Body>
              <Modal.Footer>
                <XButton to onClick={()=>{setModalDestroy(ID)}}>{translation.t('button.ok')}</XButton>
                {/* <button onClick={()=>setModalAppend({name:'okModal'})}>modal aac</button> */}
              </Modal.Footer>
        </>
    )
}

export default OkModal
