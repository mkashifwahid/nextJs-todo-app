'use client';
import { useContext, useState } from 'react';
import TodoList from './Todo-List';
import TodoContext from './TodoContext';

export default function AddTodo() {
  let [todo, setTodo] = useState('');
  let [todos, setTodos] = useState(['']);

  //todos = useContext(TodoContext);

  const clickHandler = () => {
    todos.push(todo);
    setTodos(todos);
  };

  return (
    <TodoContext.Provider value={todos}>
      <div>
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <button onClick={clickHandler}>Add</button>
      </div>
      <TodoList />
    </TodoContext.Provider>
  );
}
