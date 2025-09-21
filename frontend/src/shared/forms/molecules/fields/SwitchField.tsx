import { Flex, Switch } from '@chakra-ui/react';

import { FormField } from '@frontend/shared/forms/molecules/FormField';

type SwitchFieldProps = {
  id?: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
};

export function SwitchField({
  id,
  name,
  label,
  children,
  isRequired,
  ...switchProps
}: SwitchFieldProps) {
  return (
    <FormField id={id} name={name} required={isRequired}>
      {({ value, ...field }) => (
        <Flex gap="2" alignItems="center">
          <Switch.Root
            checked={value}
            onCheckedChange={({ checked }) => field.onChange(checked)}
            {...switchProps}
          >
            <Switch.HiddenInput {...field} />
            <Switch.Control />
            <Switch.Label>{children}</Switch.Label>
          </Switch.Root>
        </Flex>
      )}
    </FormField>
  );
}
