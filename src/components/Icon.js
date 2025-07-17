import React from 'react';

const Icon = ({ name, className }) => {
  return (
    <img
      src={`./assets/icons/${name}.svg`} // Adjust the path if necessary
      alt={name}
      className={`icon ${className}`}
    />
  );
};

export default Icon;