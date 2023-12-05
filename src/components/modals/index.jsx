import React from 'react'
import { setModalDestroy } from '../../store/modals/actions'
import { modalsData } from '../../utils/consts/modals'

const Modals = (props) => { 
    const {name,ID,...rest} = props

    const findModal = modalsData.find((modalMatch) => modalMatch.name === name)
  return (
    <div>
        {
            findModal && <findModal.element></findModal.element>
        }
        <button onClick={()=>{setModalDestroy(ID)}}>close</button>
    </div>
  )
}

export default Modals
