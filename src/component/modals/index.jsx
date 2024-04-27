import React from 'react'
import { Modal } from 'react-bootstrap'

import XButton from '../buttons/x-button'
import IconGenerate from '../iconGenerate'

import { setModalDestroy } from '../../store/app/modals/actions'
import { modalsData } from '../../utils/consts/modals'


const Modals = (props) => { 
    const {name,modalData,...rest} = props

    const findModal = modalsData.find((modalMatch) => modalMatch.name === name)
    return (
      <>
          {/* burada başka türlü modallar gelebilir bunun için ara katman var burada yani ilerde Modal Altına Başka Modallar gelip type ile yönetilebilir */}
          <Modal show={findModal ? true : false} backdrop={false} {...rest}>
            <Modal.Header>
              <Modal.Title>{modalData.data.title}</Modal.Title>
              <XButton to className="closeButton" onClick={(e)=> setModalDestroy(modalData.ID)} ><IconGenerate icon={'X'} /></XButton>
            </Modal.Header>
              {
                  findModal && <findModal.element modalData={modalData}></findModal.element>
              }           
          </Modal>
          
      </>
    )
}

export default Modals
