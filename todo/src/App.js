import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

import NewTodo from './components/NewTodo';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const onNewTodo = (value) => {
    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
  };

  const toggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
    console.log('toggle', todos);
  };

  const onRemove = (todo) => {
    console.log('remove', todo);
    setTodos(todos.filter((obj) => obj.id !== todo.id)); // filtra o array e retorna os que sao diferentes do que foi passado
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />

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
                onClick={() => onRemove(todo)}
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
