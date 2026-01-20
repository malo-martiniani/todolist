import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    console.log('Current Todos:', [...todos, newTodo]);
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <button onClick={() => addTodo("hey")} >Add Todo</button>
    </div>
  );
}

export default App;
