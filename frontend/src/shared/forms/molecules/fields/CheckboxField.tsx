import { Checkbox, Flex } from '@chakra-ui/react';

import { FormField } from '@frontend/shared/forms/molecules/FormField';

type CheckboxFieldProps = {
  id?: string;
  name: string;
  label?: React.ReactNode;
  isRequired?: boolean;
};

export function CheckboxField({
  id,
  name,
  label,
  isRequired,
  ...checkboxProps
}: CheckboxFieldProps) {
  return (
    <FormField id={id} name={name} required={isRequired}>
      {({ value, ...field }) => (
        <Flex gap="2" alignItems="center">
          <Checkbox.Root
            checked={value}
            onCheckedChange={({ checked }) => field.onChange(checked)}
            {...checkboxProps}
          >
            <Checkbox.HiddenInput {...field} />
            <Checkbox.Control />
            <Checkbox.Label>{label}</Checkbox.Label>
          </Checkbox.Root>
        </Flex>
      )}
    </FormField>
  );
}
