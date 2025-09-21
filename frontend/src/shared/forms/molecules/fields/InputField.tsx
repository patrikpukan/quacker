import { Input, InputProps } from '@chakra-ui/react';

import { FormField, type FormFieldBaseProps } from '../FormField';

export type InputFieldProps = FormFieldBaseProps<InputProps>;

export function InputField({
  id,
  name,
  label,
  ...inputProps
}: InputFieldProps) {
  return (
    <FormField id={id} name={name} label={label} required={inputProps.required}>
      {(field) => <Input {...inputProps} {...field} />}
    </FormField>
  );
}
