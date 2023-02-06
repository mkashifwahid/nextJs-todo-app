// import Image from 'next/image'
// import { Inter } from '@next/font/google';
// import styles from './page.module.css'
'use client';
import { useState } from 'react';
import AddTodo from './Add-Todo';
import TodoList from './Todo-List';
import TodoContext from './TodoContext';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    // <TodoContext.Provider value={['']}>
    <div>
      <AddTodo />
    </div>
    // </TodoContext.Provider>
  );
}
