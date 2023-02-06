'use client';
import { createContext } from 'react';

const TodoContext = createContext([{ todo: '', completed: false }]);

export default TodoContext;
