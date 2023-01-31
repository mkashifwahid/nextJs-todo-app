// import Image from 'next/image'
// import { Inter } from '@next/font/google';
// import styles from './page.module.css'

import AddTodo from './add-todo';
import TodoList from './todo-list';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}
