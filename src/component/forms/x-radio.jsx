import React from 'react'

import IconGenerate from '../iconGenerate';

import { setModalAppend } from '../../store/app/modals/actions';

const XRadio = (props) => {
  const { label, error, touch, modal, ...rest } = props;

  return (
    <div className='xRadio'>
      {modal && <a className='modalButton' onClick={()=>setModalAppend({...modal})}><IconGenerate icon={'BiInfoCircle'}/></a>}
      <div style={{ height: '30px' }}>
        <label className="radio-container">
          <input type="radio" {...rest} />
          <span className='label'>{label}</span>
          <span className="checkmark" style={(error && touch) ? { border: "2px solid red" } : null}></span>
        </label>
      </div>
    </div>
  );

}


export default XRadio