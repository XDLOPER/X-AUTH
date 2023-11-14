import React from 'react'

const Text = ({children,type,placeholder}) => {
  return (
    <div>
      <input id='input' value={children} type={type ? type : "text"} placeholder={placeholder} className='x-button'/><br />
    </div>
  )
}

export default Text
