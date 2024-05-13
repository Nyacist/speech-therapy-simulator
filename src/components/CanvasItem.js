import React from 'react';

const CanvasItem = ({letter, hand, className}) => {
  return (
    <div className={className}>
      <div className="wrapper_letter">
        <span className="letter">{letter}</span>
        <span className="hand">{hand}</span>
      </div>
    </div>
  );
};

export default CanvasItem;
