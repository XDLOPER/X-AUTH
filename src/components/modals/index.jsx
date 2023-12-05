import React from 'react'
import { Modal } from 'react-bootstrap'

import { modalsData } from '../../utils/consts/modals'
import { setModalDestroy } from '../../store/modals/actions'


const Modals = (props) => { 
    const {name,modalData,...rest} = props

    const findModal = modalsData.find((modalMatch) => modalMatch.name === name)
  return (
    <>
        {/* burada başka türlü modallar gelebilir bunun için ara katman var burada yani ilerde Modal Altına Başka Modallar gelip type ile yönetilebilir */}
        <Modal show={findModal ? true : false}>
          <Modal.Header>
            <Modal.Title>{modalData.data.title}</Modal.Title>
          </Modal.Header>
            {
                findModal && <findModal.element modalData={modalData}></findModal.element>
            }           
        </Modal>
        
    </>
  )
}

export default Modals
