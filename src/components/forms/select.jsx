import React, { useState, useEffect ,useRef } from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Select = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  //const [isInfo, setIsInfo] = useState(false);
  const refTooltip = useRef(null);
  const { error, touch, data, ...rest } = props;

  const touchAndError = (err,elseErr) => {
    return (error && touch) ? err : elseErr
  }

  useEffect(() => {
    setShowTooltip(error ? true : false)
  }, [error]);
  return (
    <div className="input-wrapper">
      <OverlayTrigger
        placement="right"
        overlay={
          error && touch ?
          <Tooltip id={`tooltip-right`}>
            <strong>{touchAndError(error,null)}</strong>
          </Tooltip>
          : 
          <></>
        }
      >
        {/* The content you want to trigger the overlay should be inside OverlayTrigger */}
      <Form.Select
          ref={refTooltip}
          className="x-button"
          style={touchAndError({ border: '2px solid red' },{})}
          {...rest}
      >
          {data?.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
      </Form.Select>

      </OverlayTrigger>

      {/* before error message panel
      {error && touch ? (
        <button className="input-info-button" onClick={() => setIsInfo(!isInfo)}>
          <TiInfoOutline />
          <span className="input-info-content" style={isInfo ? { display: 'block' } : null}>
            {error}
          </span>
        </button>
      ) : null}
      */}
    </div>
  );
};

export default Select;
