import React from 'react';
import './Rectangle.css';

function Rectangle({rectangleImage}) {
  return <div className="rectangle">  <img src={rectangleImage} alt="Rectangle" /></div>;
}

export default Rectangle;
