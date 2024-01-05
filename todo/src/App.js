import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import './App.css';

function App() {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    console.log('submit', value);

    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);

    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const toggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
    console.log('toggle', todos);
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <input
          className="new-todo"
          placeholder="O que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={`todo ${todo.checked ? `checked` : ''}`}
                onClick={() => toggle(todo)}
                onKeyPress={() => toggle(todo)}
                role="button"
                // label="Checked"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button
                type="button"
                className="remove"
                label="Remove button"
                // onKeyPress={() => toggle(todo)}
                // role="button"
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default App;
