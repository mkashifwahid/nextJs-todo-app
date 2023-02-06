'use client';
import { useContext, useState } from 'react';
import TodoList from './Todo-List';
import TodoContext from './TodoContext';

export default function AddTodo() {
  let [todo, setTodo] = useState('');
  let todos = useContext(TodoContext);
  let [allTodos, setAllTodos] = useState([{ todo: '', completed: false }]);

  const clickHandler = () => {
    todos = [...allTodos, { todo: todo, completed: false }];
    setAllTodos(todos);
  };

  return (
    <TodoContext.Provider value={allTodos}>
      <div>
        <input type="text" onChange={(e) => setTodo(e.target.value)} />
        <button onClick={clickHandler}>Add</button>
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}
