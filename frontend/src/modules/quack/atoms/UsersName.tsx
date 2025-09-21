import { Text } from '@chakra-ui/react';

export type UsersNameProps = {
  name: string;
};

export function UsersName({ name, ...restProps }: UsersNameProps) {
  return (
    <Text color="blackAlpha.800" fontWeight="bold" {...restProps}>
      {name}
    </Text>
  );
}
