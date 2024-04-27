import React,{useState} from 'react'

import IconGenerate from '../iconGenerate';

import { setModalAppend } from '../../store/app/modals/actions';

const XCheckbox = (props) => {
  const { label, error, touch, modal, ...rest } = props;

  return (
    <div className='xCheckbox'>
      <div>
        {/*<label className="checkbox-container">
          <input type="checkbox" {...rest} />
          <span className='label'>{label}</span>
          <span className="checkmark" style={(error && touch) ? { border: "2px solid red" } : null}></span>
          </label>*/}
        <div className={`form-check form-switch `}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            style={(error && touch) ? { border: "2px solid red" } : {}}
            {...rest}
          />
          {label && (
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {label}
            </label>
          )}
          {modal && <a className='modalButton' onClick={()=>setModalAppend({...modal})}><IconGenerate icon={'BiInfoCircle'}/></a>}
        </div>
      </div>
    </div>
  );

}


export default XCheckbox