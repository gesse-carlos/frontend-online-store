import React from 'react';
import PropTypes from 'prop-types';

function Input(
  { id, name, type, testID, className, labelText, onChange, placeHolder, value, onClick }
) {
  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        id={ id }
        name={ name }
        data-testid={ testID }
        className={ className }
        onChange={ onChange }
        onClick={ onClick }
        placeholder={ placeHolder }
        value={ value }
      />
      { labelText }
    </label>
  );
}

const { string, func } = PropTypes;

Input.propTypes = {
  id: string,
  name: string.isRequired,
  type: string.isRequired,
  testID: string,
  className: string.isRequired,
  labelText: string,
  onChange: func,
  onClick: func,
}

export default Input;