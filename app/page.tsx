// import Image from 'next/image'
// import { Inter } from '@next/font/google';
// import styles from './page.module.css'
'use client';
import AddTodo from './Add-Todo';
import TodoList from './Todo-List';
import TodoContext from './TodoContext';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <AddTodo />
    </div>
  );
}
