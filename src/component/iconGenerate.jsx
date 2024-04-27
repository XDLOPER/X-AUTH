import React from 'react';
import * as IconsBi from 'react-icons/bi';
import * as IconsBs from 'react-bootstrap-icons';

const IconGenerate = ({ icon }) => {

  function correctIcon(icon) {
    const iconName = icon?.trim()
    let iconBi = IconsBi[iconName];
    let iconBs = IconsBs[iconName];

    const icons = [iconBi, iconBs];
    const findIcon = icons.find((icon) => icon !== undefined);

    return findIcon;
  }

  const IconComponent = correctIcon(icon);

  return <div className='iconGenerate'>{IconComponent ? React.createElement(IconComponent) : "-"}</div>;
};

export default IconGenerate;
