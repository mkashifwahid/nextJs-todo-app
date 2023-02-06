'use client';
import { useContext } from 'react';
import TodoContext from './TodoContext';

export default function TodoList() {
  const value = useContext(TodoContext);
  console.log('todo list again', value);
  const taskCheckChanged = () => {};

  return (
    <div>
      {value.map((todo) => (
        <tr key={todo.todo}>
          <td>{todo.todo}</td>
          <td>
            <input type="checkbox" onClick={taskCheckChanged} />
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </div>
  );
}
