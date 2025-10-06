import { useState } from 'react';

import type { Todo } from '../types';

export const FILTER_STATE = {
  all: 'all',
  done: 'done',
  notDone: 'not-done',
} as const;

export type TodoFilter = (typeof FILTER_STATE)[keyof typeof FILTER_STATE];

const filterFunctions = {
  [FILTER_STATE.all]: (todos: Todo[]) => todos,
  [FILTER_STATE.done]: (todos: Todo[]) => todos.filter((todo) => todo.isDone),
  [FILTER_STATE.notDone]: (todos: Todo[]) =>
    todos.filter((todo) => !todo.isDone),
} as const;

export function useTodos(initialState: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initialState);
  const [filter, setFilter] = useState<TodoFilter>(FILTER_STATE.all);

  const filteredTodos = filterFunctions[filter](todos);

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

  return { todos: filteredTodos, add, toggle, remove, filter, setFilter };
}
