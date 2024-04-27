import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const XTextHidden = forwardRef((props, ref) => {
  const { error, touch, ...rest } = props;
  const inputRef = useRef();

  const touchAndError = (err, elseErr) => {
    return error && touch ? err : elseErr;
  };

  useImperativeHandle(ref, () => ({
    // Dışarıya açmak istediğiniz fonksiyonları buraya yazıyoruz dışardaki componetten erişiyoruz
    clearInput: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },

    typeChangeInput: (value) => {
      if (inputRef.current) {
        inputRef.current.type = value;
      }
    },

  }));

  return (
    <div className='input-wrapper'>
      <OverlayTrigger
        placement={'right'}
        overlay={
          error ? (
            <Tooltip id={`tooltip-right`}>
              <strong>{touchAndError(error, null)}</strong>
            </Tooltip>
          ) : (
            <></>
          )
        }
      >
        <input
          ref={inputRef}
          className='form-control xText'
          style={touchAndError({ border: '2px solid red' }, {})}
          {...rest}
        />
      </OverlayTrigger>
    </div>
  );
});

export default XTextHidden;
