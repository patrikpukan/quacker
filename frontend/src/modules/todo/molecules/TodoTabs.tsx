import { Tabs, type TabsRootProps } from '@chakra-ui/react';

import { FILTER_STATE, type TodoFilter } from '../hooks/useTodos';

type Props = {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  children: React.ReactNode;
} & TabsRootProps;

export function TodoTabs({
  filter,
  onFilterChange,
  children,
  ...props
}: Props) {
  const { all, done, notDone } = FILTER_STATE;

  return (
    <Tabs.Root
      value={filter}
      onValueChange={(details) => onFilterChange(details.value as TodoFilter)}
      {...props}
    >
      <Tabs.List>
        <Tabs.Trigger value={all}>All</Tabs.Trigger>
        <Tabs.Trigger value={notDone}>Not Done</Tabs.Trigger>
        <Tabs.Trigger value={done}>Done</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value={filter}>{children}</Tabs.Content>
    </Tabs.Root>
  );
}
