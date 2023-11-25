import React, { useState } from 'react'
import { TiInfoOutline } from "react-icons/ti";

const Select = (props) => {
  const [isInfo,setIsInfo] = useState(false)
  const {error,touch,data} = props
  return (
    <div className='input-wrapper'>
      <select {...props} className='x-button' style={(error && touch) ? {border:"2px solid red"} : null} >
        {
          data?.map((value,index)=>{
            return <>
              <option key={index}>{value}</option>
            </>
          })
        }
      </select>
      {(error && touch) ? (<button className='input-info-button' onClick={()=>setIsInfo(!isInfo)}><TiInfoOutline /><span className='input-info-content' style={isInfo ? {display:'block'} : null}>{error}</span></button>) : null}
    </div>
  )
}

export default Select