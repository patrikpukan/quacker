import { type ReactNode } from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { ErrorBanner } from '@frontend/shared/design-system/components';
import { InputField } from '@frontend/shared/forms/molecules/fields';
import { Form } from '@frontend/shared/forms/molecules/Form';

const schema = zod.object({
  email: zod.string().trim().min(1, 'Email is required').email('Invalid email'),
  password: zod.string().trim().min(1, 'Password is required'),
});

type FormValues = zod.infer<typeof schema>;

const initialValues: FormValues = { email: '', password: '' };

export type SingInFormProps = {
  children?: ReactNode;
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (data: { email: string; password: string }) => void;
};

export function SignInForm({
  isLoading,
  errorMessage,
  onSubmit,
  children,
}: SingInFormProps) {
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={initialValues}
      resolver={zodResolver(schema)}
      noValidate
    >
      <Stack gap="3" py="4">
        {errorMessage && <ErrorBanner title={errorMessage} />}
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="e.g. john@doe.com"
          required
          autoFocus
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <InputField
          id="password"
          name="password"
          label="Password"
          type="password"
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </Stack>
      <Button
        size="lg"
        type="submit"
        loading={isLoading}
        colorPalette="green"
        mt="4"
        mb="2"
      >
        Sign In
      </Button>
      {children}
    </Form>
  );
}
