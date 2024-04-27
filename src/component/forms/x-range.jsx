import React from 'react'
import {Form} from 'react-bootstrap'

import IconGenerate from '../iconGenerate';

const XRange = (props) => {
  const { label, max ,step, min, error,touch, ...rest } = props;

  return (
    <div className='xRange'>
        {label && <label for="range" class="form-label">{label}</label>}
        <input type="range" class="form-range" max={max} step={step} min={min} id="range" style={(error && touch) ? { border: "2px solid red" } : {}} {...rest}/>
    </div>
  );

}


export default XRange