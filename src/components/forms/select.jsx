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
              <option key={value} value={value}>{value}</option>
            </>
          })
        }
      </select>
      
    </div>
  )
}

export default Select