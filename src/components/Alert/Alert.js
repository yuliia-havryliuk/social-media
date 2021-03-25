import s from './Alert.module.css';
import PropTypes from 'prop-types';
import React from "react";

function Alert({ text, type }) {
  return (
    <div>
      <p role="alert" className={s[type]}>  {/*{`${s.alert} ${s[type]}`}*/}
        {text}
      </p>
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default','error', 'warning', 'success']).isRequired,
};
export default Alert;
