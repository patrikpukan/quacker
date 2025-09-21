import { type ReactNode } from 'react';
import { Field as ChakraField } from '@chakra-ui/react';

export type FieldProps = {
  id?: string;
  label?: ReactNode;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <ChakraField.Root id={id} required={required} invalid={!!error}>
      <ChakraField.Label>{label}</ChakraField.Label>
      {children}
      <ChakraField.ErrorText>{error}</ChakraField.ErrorText>
    </ChakraField.Root>
  );
}
