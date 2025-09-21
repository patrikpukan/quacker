import { type ComponentPropsWithoutRef } from 'react';
import { Button, type ButtonProps } from '@chakra-ui/react';

export type TransparentButtonProps = ButtonProps &
  ComponentPropsWithoutRef<'button'>;

export function TransparentButton(props: TransparentButtonProps) {
  return (
    <Button
      variant="ghost"
      display="flex"
      alignItems="center"
      color="gray.600"
      fontSize="sm"
      px="3"
      py="1.5"
      _hover={{ color: 'gray.400' }}
      {...props}
    />
  );
}
