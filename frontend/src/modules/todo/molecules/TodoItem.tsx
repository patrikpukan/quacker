import { Checkbox, Flex, IconButton } from '@chakra-ui/react';
import { FaRegTrashAlt as TrashIcon } from 'react-icons/fa';

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
      className="group"
      _hover={{ backgroundColor: 'gray.100' }}
      py="1"
      px="2"
    >
      <Checkbox.Root
        colorPalette="blue"
        checked={todo.isDone}
        onChange={() => onToggle(todo.id)}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label
          textDecoration={todo.isDone ? 'line-through' : 'none'}
          color={todo.isDone ? 'gray.500' : undefined}
        >
          {todo.title}
        </Checkbox.Label>
      </Checkbox.Root>
      <IconButton
        aria-label="Delete todo"
        size="sm"
        colorPalette="red"
        visibility="hidden"
        onClick={() => onRemove(todo.id)}
        _groupHover={{
          visibility: 'visible',
        }}
      >
        <TrashIcon />
      </IconButton>
    </Flex>
  );
}
