import React, { useState } from 'react'
import { TiInfoOutline } from "react-icons/ti";

const Text = (props) => {
  const [isInfo,setIsInfo] = useState(false)
  const {error,touch} = props
  return (
    <div className='input-wrapper'>
      <input {...props} className='x-button' style={(error && touch) ? {border:"2px solid red"} : null} />
      {(error && touch) ? (<button className='input-info-button' onClick={()=>setIsInfo(!isInfo)}><TiInfoOutline /><span className='input-info-content' style={isInfo ? {display:'block'} : null}>{error}</span></button>) : null}
    </div>
  )
}

export default Text
