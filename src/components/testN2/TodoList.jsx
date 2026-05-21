import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');
  const [buttonColor, setButtonColor] = useState('yellow');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      setError('Todo cannot be empty.');
      return;
    }

    if (newTodo.length > 100) {
      setError('Todo cannot exceed 100 characters.');
      return;
    }

    const timestamp = new Date().toLocaleString();
    setTodos([...todos, { text: newTodo, completed: false, createdAt: timestamp }]);
    setNewTodo('');
    setError('');
    setButtonColor('green');

    setTimeout(() => {
      setButtonColor('yellow');
    }, 300);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          className="todo-text-input"
        />
        <button
          onClick={handleAddTodo}
          style={{ backgroundColor: buttonColor }}
        >
          Add
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(index)}>{todo.text}</span>
            <span className="timestamp">Created at: {todo.createdAt}</span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;