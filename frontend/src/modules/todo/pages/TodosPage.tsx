import { Box } from '@chakra-ui/react';

import { Heading } from '@frontend/shared/design-system/components';

import { useTodos } from '../hooks/useTodos';
import { AddTodoForm } from '../molecules/AddTodoForm';
import { TodoTabs } from '../molecules/TodoTabs';
import { TodoList } from '../organisms/TodoList';

export function TodosPage() {
  const { todos, add, toggle, remove, filter, setFilter } = useTodos();

  return (
    <Box>
      <Heading mb={10}>Practical 02</Heading>

      <AddTodoForm onSubmit={add} />
      <TodoTabs filter={filter} onFilterChange={setFilter} mt={6}>
        <TodoList
          todos={todos}
          onToggle={toggle}
          onRemove={remove}
          filter={filter}
        />
      </TodoTabs>
    </Box>
  );
}
