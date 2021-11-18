import React from 'react';
import PropTypes from 'prop-types';

function Select({ labelText, name, options, className, id, onChange }) {
  return (
    <label htmlFor={ name }>
      { labelText }
      <Select
        name={ name }
        className={ className }
        id={ id }
      >
        { options.map((option, index) => (
          <option key={ index } value={ option }>
            { option }
          </option>
        )) }
      </Select>
    </label>
  );
}

const { string, func, arrayOf } = PropTypes;

Select.propTypes = {
  labelText: string,
  name: string.isRequired,
  options: arrayOf(string).isRequired,
  className: string,
  id: string,
  onChange: func.isRequired,
}

export default Select;
