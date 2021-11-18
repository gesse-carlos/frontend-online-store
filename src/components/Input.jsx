import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, value, name, className, id, labelText}) {
  return (
    <label htmlFor={ name }>
      { labelText }
      <input
        type={ type }
        value={ value }
        className={ className }
        id={ id }
        name={ name }
      />
    </label>
  );
}

const { string } = PropTypes;

Input.propTypes = {
  type: string.isRequired,
  value: string,
  name: string.isRequired,
  className: string,
  id: string,
  labelText: string,
};

export default Input;
