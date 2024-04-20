  import React from 'react'
  import { Modal } from 'react-bootstrap'

  import X_BUTTON from '../../buttons/x-button'

  import { setModalAppend, setModalDestroy } from '../../../store/modals/actions'

  const OkModal = (props) => {
    const {modalData} = props
    const {ID} = modalData
    return (
      <>
              <Modal.Body>{modalData.data.body}</Modal.Body>
              <Modal.Footer style={{width:"100%",margin:'auto'}}>
                <X_BUTTON to on={true} onClick={()=>{setModalDestroy(ID)}} style={{width:'100%',padding:'10px'}}>tamam</X_BUTTON>
                {/* <button onClick={()=>setModalAppend({name:'okModal'})}>modal aac</button> */}
              </Modal.Footer>
        </>
    )
  }

  export default OkModal
