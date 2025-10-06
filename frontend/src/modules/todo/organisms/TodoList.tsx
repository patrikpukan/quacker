import { Center, Stack } from '@chakra-ui/react';

import { FILTER_STATE, type TodoFilter } from '../hooks/useTodos';
import { TodoItem } from '../molecules/TodoItem';
import type { Todo } from '../types';

type Props = {
  todos: Todo[];
  filter: TodoFilter;
  onToggle: (id: Todo['id']) => void;
  onRemove: (id: Todo['id']) => void;
};

export function TodoList({ todos, filter, onToggle, onRemove }: Props) {
  const hasTodos = todos.length > 0;

  return (
    <Stack
      borderColor="gray.300"
      borderWidth="1px"
      spaceY="0"
      overflow="hidden"
      rounded="md"
    >
      {hasTodos ? (
        <>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
        </>
      ) : (
        <Center py="2.5" color="gray">
          No items {filter !== FILTER_STATE.all ? 'for selected filter' : null}
        </Center>
      )}
    </Stack>
  );
}
