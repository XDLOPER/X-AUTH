import React from 'react'
import { FiInfo } from "react-icons/fi";

import { setModalAppend } from '../../store/app/modals/actions'

const XCheckbox = (props) => {
  const { label, error, touch,modal, ...rest } = props;

  return (
    <div className='xCheckbox'>
      {modal && <a className='modalButton' onClick={()=>setModalAppend({...modal})}><FiInfo/></a>}
      <div style={{ height: '30px' }}>
        <label className="checkbox-container">
          <input type="checkbox" {...rest} />
          <span className='label'>{label}</span>
          <span className="checkmark" style={(error && touch) ? { border: "2px solid red" } : null}></span>
        </label>
      </div>
    </div>
  )
}

export default XCheckbox