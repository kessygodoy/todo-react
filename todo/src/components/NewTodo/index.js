import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewTodo({ onNewTodo }) {
  const [value, setValue] = useState('');

  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const erase = () => {
    setValue('');
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      console.log('submit', value);

      erase();
    }
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="O que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

NewTodo.PropTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
