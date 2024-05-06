import React, { useState, useEffect ,useRef } from 'react'
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap'

import useWindowSize from '../../hooks/useWindowSize'

const XSelect = (props) => {
  const { error, touch, data, ...rest } = props
  const [showTooltip, setShowTooltip] = useState(false)
  const refTooltip = useRef(null)
  
  const windowSize = useWindowSize()

  const touchAndError = (err,elseErr) => {
    return (error && touch) ? err : elseErr
  }

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
      <Form.Select
          ref={refTooltip}
          className="xSelect"
          style={touchAndError({ border: '2px solid red' },{})}
          {...rest}
      >
          {data?.map((value, index) => (
            <option key={index} value={value?.value ? value?.value : value?.title} title={value?.title}>{value?.title}</option>
          ))}
      </Form.Select>

      </OverlayTrigger>
    </div>
  );
};

export default XSelect;
