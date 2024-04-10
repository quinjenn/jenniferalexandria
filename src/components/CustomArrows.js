import React from 'react';

const arrowStyle = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#333',
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button style={arrowStyle} onClick={onClick}>
      <span>&gt;</span>
    </button>
  );
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button style={arrowStyle} onClick={onClick}>
      <span>&lt;</span>
    </button>
  );
};

export { CustomRightArrow, CustomLeftArrow };
