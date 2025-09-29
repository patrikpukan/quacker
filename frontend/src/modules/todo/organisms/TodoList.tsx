import { Stack, type StackProps } from '@chakra-ui/react';

import { TodoItem } from '../molecules/TodoItem';
import { Todo } from '../types';

type Props = {
  todos: Todo[];
  onToggle: (id: Todo['id']) => void;
  onRemove: (id: Todo['id']) => void;
} & Omit<StackProps, 'onToggle' | 'onRemove'>;

export function TodoList({ todos, onToggle, onRemove, ...stackProps }: Props) {
  return (
    <Stack
      spaceY={2}
      borderWidth="1px"
      borderColor="gray.300"
      borderRadius="lg"
      p={3}
      {...stackProps}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </Stack>
  );
}
