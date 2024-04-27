import React, { useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import XButton from './x-button';
import IconGenerate from '../iconGenerate';

const AnchorButton = ({ ...props }) => {
  const { icon, scriptSetting,...rest } = props;
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleScroll = () => {
      window.scrollTo({
        ...scriptSetting,
      });
    };

    button?.addEventListener('click', handleScroll);

    // useEffect içinde geriye bir fonksiyon döndüğünüzde, bu fonksiyon komponent ayrıldığında çalışır (cleanup)
    return () => {
      button?.removeEventListener('click', handleScroll);
    };
  }, [scriptSetting]);

  return (
    <>  
      <XButton as={
        <Button className='btn anchorButton xButton' ref={buttonRef} variant=''>
          <IconGenerate icon={icon} />
        </Button>
      }></XButton>

    </>
  );
};

export default AnchorButton;
