'use client';
import { useContext } from 'react';
import TodoContext from './TodoContext';

export default function TodoList() {
  const value = useContext(TodoContext);
  console.log('todo list again', value);
  return (
    <div>
      <ul>
        {value.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
