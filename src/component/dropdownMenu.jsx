import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import XButton from './buttons/x-button';

const DropdownMenu = ({ children, ...props }) => {
  const { icon, menuList, direction, ...rest } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleDropdownItemClick = (item) => {
    setShowDropdown(false);
    navigate(item?.path);
  };

  return (
    <>
      <Dropdown show={showDropdown} onClick={handleDropdownToggle} ref={dropdownRef} {...rest}>
        <XButton id="notificationButton" icon={icon ? icon : ''} style={{ borderRadius: "5px" }}>
          {children}
        </XButton>

        {menuList?.length !== 0 && (
          <Dropdown.Menu drop={direction || 'down'} autoClose="outside">
            {menuList?.map((item, index) => (
              <XButton key={index} onClick={() => handleDropdownItemClick(item)}>
                {item?.title}
              </XButton>
            ))}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </>
  );
}

export default DropdownMenu;
