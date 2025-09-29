import { useState } from 'react';

import { Todo } from '../types';

type Filter = 'all' | 'completed' | 'notCompleted';

export function useTodos(initialState: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initialState);
  const [filter, setFilter] = useState<Filter>('all');

  const add = (title: Todo['title']) => {
    const t = title.trim();
    if (!t) return;

    const newTodo: Todo = { id: crypto.randomUUID(), title: t, isDone: false };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggle = (id: Todo['id']) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const remove = (id: Todo['id']) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos =
    filter === 'all'
      ? todos
      : todos.filter((t) => (filter === 'completed' ? t.isDone : !t.isDone));

  return { todos: filteredTodos, add, toggle, remove, filter, setFilter };
}
