import React from 'react';
import './Box.css';

function Box({ type = 'small', classNames = '', styles }) {
  return (
    <div
      className={`box box-${type} ${classNames}`}
      style={styles} /* style={{ backgroundColor: bgColor }}*/
    >
      Box
    </div>
  );
}
export default Box;
