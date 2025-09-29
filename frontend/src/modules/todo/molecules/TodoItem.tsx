import { Checkbox, Flex } from '@chakra-ui/react';
import {
  TransparentButton,
  Icon,
} from '@frontend/shared/design-system/components';
import { DeleteIcon } from '@frontend/shared/design-system/icons';

import type { Todo } from '../types';

type Props = {
  todo: Todo;
  onToggle: (id: Todo['id']) => void;
  onRemove: (id: Todo['id']) => void;
};

export function TodoItem({ todo, onToggle, onRemove }: Props) {
  return (
    <Flex justify="space-between" align="center">
      <Checkbox.Root checked={todo.isDone} onChange={() => onToggle(todo.id)}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label
          textDecoration={todo.isDone ? 'line-through' : undefined}
        >
          {todo.title}
        </Checkbox.Label>
      </Checkbox.Root>
      <TransparentButton
        aria-label="Delete todo"
        onClick={() => onRemove(todo.id)}
      >
        <Icon as={DeleteIcon} />
      </TransparentButton>
    </Flex>
  );
}
