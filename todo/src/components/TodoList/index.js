import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

function TodoList({ todos, onToggle, onRemove }) {
  return (
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
  );
}

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
