import React from 'react'

const hr = ({size="50%", type='default',position='horizontal'}) => {
  return (
    <>
    {
      (type === 'default' && position === 'horizontal') && <div className='customHrHorizantal' style={size ? {width:size} : {width:"10%"}}></div>
    }
    {
      (type === 'center' && position === 'horizontal') && <div className='customHrHorizantal mx-auto' style={size ? {width:size} : {width:"10%"}}></div>
    }
    {
      (type === 'default' && position === 'vertical') && <div className='customHrVertical' style={size ? {height:size} : {height:"70%"}}></div>
    }
    </>
  )
}

export default hr
