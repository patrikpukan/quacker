import { Box, Tabs } from '@chakra-ui/react';

import { Heading } from '@frontend/shared/design-system/components';

import { useTodos } from '../hooks/useTodos';
import { AddTodoForm } from '../molecules/AddTodoForm';
import { TodoList } from '../organisms/TodoList';

export function TodosPage() {
  const { todos, add, toggle, remove, filter, setFilter } = useTodos();

  return (
    <Box>
      <Heading mb={10}>Practical 02</Heading>

      <AddTodoForm onSubmit={add} />
      <Tabs.Root
        value={filter}
        onValueChange={(details) => setFilter(details.value as any)}
        mt={6}
      >
        <Tabs.List>
          <Tabs.Trigger value="all">All</Tabs.Trigger>
          <Tabs.Trigger value="completed">Completed</Tabs.Trigger>
          <Tabs.Trigger value="notCompleted">Not completed</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <TodoList todos={todos} onToggle={toggle} onRemove={remove} mt={10} />
    </Box>
  );
}
