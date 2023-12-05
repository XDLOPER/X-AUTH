  import React from 'react'
  import { Modal } from 'react-bootstrap'

  import { setModalAppend, setModalDestroy } from '../../../store/modals/actions'

  const OkModal = (props) => {
    const {modalData} = props
    const {ID} = modalData
    return (
      <>
              <Modal.Body>{modalData.data.body}</Modal.Body>
              <Modal.Footer>
                <button style={{"height":"50px"}} onClick={()=>{setModalDestroy(ID)}}>
                    Tamam
                </button>
                {/* <button onClick={()=>setModalAppend({name:'okModal'})}>modal aac</button> */}
              </Modal.Footer>
        </>
    )
  }

  export default OkModal
