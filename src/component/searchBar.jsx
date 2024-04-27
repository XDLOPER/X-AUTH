import React, { useRef, useState } from 'react';
import XButton from './buttons/x-button';
import IconGenerate from '../component/iconGenerate';
import Text from './forms/text/x-text';

const SearchBar = ({ children, ...props }) => {
  const { ...rest } = props;
  const [iconChange, setIconChange] = useState(false);
  const textRef = useRef();

  function handleInput(e) {
    if (e.target.value.length > 0) {
      setIconChange(true);
    } else {
      setIconChange(false);
    }
  }

  const handleClearInput = () => {
    textRef.current.clearInput();
    setIconChange(false);
  };

  return (
    <div className='searchBox'>
      <Text type="text" onInput={handleInput} ref={textRef} {...rest} />
      <XButton onClick={handleClearInput}>
        {iconChange ? (
          <IconGenerate icon={'XCircleFill'} style={{ width: 'auto', padding: '0px 10px', margin: 0 }}></IconGenerate>
        ) : (
          <IconGenerate icon={'Search'} style={{ width: 'auto', padding: '0px 10px', margin: 0 }}></IconGenerate>
        )}
      </XButton>
    </div>
  );
};


export default SearchBar;
