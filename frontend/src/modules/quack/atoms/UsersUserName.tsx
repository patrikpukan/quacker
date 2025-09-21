import { Text } from '@chakra-ui/react';

export type UsersUserNameProps = {
  userName: string;
};

export function UsersUserName({ userName, ...restProps }: UsersUserNameProps) {
  return (
    <Text color="gray.500" fontSize="sm" {...restProps}>
      @{userName}
    </Text>
  );
}
