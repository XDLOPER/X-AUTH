import React, { useState, useEffect ,useRef } from 'react'
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import classNames from 'classnames'

import useWindowSize from '../../hooks/useWindowSize'

const XTextarea = (props) => {
    const { error, touch, className,rows, ...rest } = props
    const [showTooltip, setShowTooltip] = useState(false)
    const refTooltip = useRef(null)

    const windowSize = useWindowSize()

    const touchAndError = (err,elseErr) => {
        return (error && touch) ? err : elseErr
    }
  
    const xTextareaClasses = classNames(`form-control xTextarea`, className, {})

    useEffect(() => {
        setShowTooltip(error ? true : false)
    }, [error])
  
  return (
    <div className="input-wrapper">
      <OverlayTrigger
        placement={windowSize?.width < 900 ? 'top' : 'right'}
        overlay={
          error && touch ?
          <Tooltip>
            <strong>{touchAndError(error,null)}</strong>
          </Tooltip>
          :
          <></>
        }
      >
      <textarea 
            rows={rows ? rows : 3}
            ref={refTooltip}
            className={xTextareaClasses}
            style={touchAndError({ border: '2px solid red' },{})}
            {...rest}
      /> 

      </OverlayTrigger>
    </div>
  );
};

export default XTextarea;
