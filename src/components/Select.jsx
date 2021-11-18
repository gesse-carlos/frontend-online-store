import React from 'react';

function Select({ labelText, name, options, className, id}) {
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

export default Select;
