import { ChangeEvent, type FormEvent, useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';

import { Todo } from '../types';

type Props = {
  onSubmit: (title: Todo['title']) => void;
};

export function AddTodoForm({ onSubmit }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Input
          placeholder="Learn React"
          value={value}
          onChange={handleChange}
        />
        <Button type="submit">Add</Button>
      </Flex>
    </form>
  );
}
