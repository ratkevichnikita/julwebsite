import React from 'react';
import './styles.css';

const Loader = ({size = 1}) => {
  return (
    <div  style={{transform: `scale(${size})`}} className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;