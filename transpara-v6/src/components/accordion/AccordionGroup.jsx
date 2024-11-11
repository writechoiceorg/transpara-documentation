import React from 'react';
import '../../css/accordion.css';

const Accordion = ({ children }) => {
  return (
    <div className="accordion_group">
      {children}
    </div>
  );
};

export default Accordion;

