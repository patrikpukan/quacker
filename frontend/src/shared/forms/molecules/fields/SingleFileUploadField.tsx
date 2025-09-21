import { Input, InputProps } from '@chakra-ui/react';

import { FormField, type FormFieldBaseProps } from '../FormField';

export type SingleFileUploadFieldProps = FormFieldBaseProps<
  Omit<InputProps, 'multiple'>
>;

export function SingleFileUploadField({
  id,
  name,
  label,
  ...inputProps
}: SingleFileUploadFieldProps) {
  return (
    <FormField id={id} name={name} label={label} required={inputProps.required}>
      {({ value, onChange, ...restField }) => (
        <Input
          {...inputProps}
          {...restField}
          type="file"
          value={value?.fileName}
          onChange={(event) => onChange(event.target.files?.[0] ?? null)}
        />
      )}
    </FormField>
  );
}
