import React from 'react'

const Checkbox = ({children,on,label}) => {
  return (
    <div>
          <label class="checkbox-container">
            <input type="checkbox" />
            <span className='label'>{label}</span>
            <span class="checkmark"></span>
          </label>
    </div>
  )
}

export default Checkbox