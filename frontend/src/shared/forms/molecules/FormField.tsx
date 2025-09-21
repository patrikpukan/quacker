import { type ReactNode } from 'react';
import { type ControllerRenderProps, useController } from 'react-hook-form';

import { Field, FieldProps } from '@frontend/shared/design-system/components';

type BaseProps = Pick<FieldProps, 'id' | 'label' | 'required'> & {
  name: string;
};

export type FormFieldBaseProps<TInputProps> = BaseProps &
  Omit<TInputProps, keyof BaseProps>;

export type FormFieldProps = BaseProps & {
  children: (controller: ControllerRenderProps) => ReactNode;
};

export function FormField({ name, children, ...restProps }: FormFieldProps) {
  const controller = useController({ name });

  const error = controller?.fieldState?.error?.message;

  return (
    <Field error={error} {...restProps}>
      {children(controller.field)}
    </Field>
  );
}
