import { Checkbox, Flex, IconButton } from '@chakra-ui/react';

import { Icon } from '@frontend/shared/design-system/components';
import { DeleteIcon } from '@frontend/shared/design-system/icons';

import type { Todo } from '../types';

type Props = {
  todo: Todo;
  onToggle: (id: Todo['id']) => void;
  onRemove: (id: Todo['id']) => void;
};

export function TodoItem({ todo, onToggle, onRemove }: Props) {
  return (
    <Flex
      justify="space-between"
      align="center"
      p={1}
      borderRadius="md"
      transitionProperty="background-color"
      transitionDuration="normal"
      _hover={{ backgroundColor: 'gray.100' }}
    >
      <Checkbox.Root
        checked={todo.isDone}
        colorPalette="blue"
        onChange={() => onToggle(todo.id)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label
          textDecoration={todo.isDone ? 'line-through' : undefined}
          opacity={todo.isDone ? 0.6 : 1}
        >
          {todo.title}
        </Checkbox.Label>
      </Checkbox.Root>
      <IconButton
        aria-label="Delete todo"
        colorPalette="red"
        onClick={() => onRemove(todo.id)}
      >
        <Icon as={DeleteIcon} />
      </IconButton>
    </Flex>
  );
}
