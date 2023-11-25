import React from 'react'

const Checkbox = (props) => {
  const { label, error, touch, ...rest } = props;

  return (
    <div style={{ height: '30px' }}>
      <label className="checkbox-container">
        <input type="checkbox" {...rest} />
        <span className='label'>{label}</span>
        <span className="checkmark" style={(error && touch) ? { border: "2px solid red" } : null}></span>
      </label>
    </div>
  );
}

export default Checkbox