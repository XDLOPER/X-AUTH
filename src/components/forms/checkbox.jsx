import React from 'react'

const Checkbox = ({children,on,label}) => {
  return (
    <div style={{height:'30px'}}>
          <label className="checkbox-container">
            <input type="checkbox" />
            <span className='label'>{label}</span>
            <span className="checkmark"></span>
          </label>
    </div>
  )
}

export default Checkbox