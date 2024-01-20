import React, { useState ,useRef, useEffect} from 'react'
import { Button, Overlay ,OverlayTrigger,Tooltip } from 'react-bootstrap';

const Text = (props) => {
  const {error,touch,...rest} = props
  const target = useRef(null);

  const touchAndError = (err,elseErr) => {
    return (error && touch) ? err : elseErr
  } 

  return (
    <div className='input-wrapper'>
        <OverlayTrigger
          //trigger="click"
          placement={'right'}
          overlay={
            error && touch ?
            <Tooltip id={`tooltip-right`}>
              <strong>{touchAndError(error,null)}</strong>
            </Tooltip>
            :
            <></>
          }
        >
          <input
            ref={target}
            className='x-button'
            style={touchAndError({ border: '2px solid red' },{})}
            {...rest}
          />
        </OverlayTrigger>

      {/* eski sistem için  
      {error && touch ? (
        <button
          className='input-info-button'
          onClick={() => setIsInfo(!isInfo)}
        >
          <TiInfoOutline />
          <span className='input-info-content' style={isInfo ? { display: 'block' } : null}>
            {error}
          </span>
        </button>
      ) : null}
      */}
      
    </div>
  )
}

export default Text
