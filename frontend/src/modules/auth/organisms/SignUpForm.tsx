import { type ReactNode } from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { route } from '@frontend/route';
import { ErrorBanner } from '@frontend/shared/design-system/components';
import {
  InputField,
  SingleFileUploadField,
} from '@frontend/shared/forms/molecules/fields';
import { CheckboxField } from '@frontend/shared/forms/molecules/fields/CheckboxField';
import { Form } from '@frontend/shared/forms/molecules/Form';
import { RouterLink } from '@frontend/shared/navigation/atoms/RouterLink';

const schema = zod
  .object({
    email: zod
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Invalid email'),
    name: zod.string().trim().min(1, 'Name is required'),
    password: zod.string().trim().min(1, 'Password is required'),
    passwordConfirmation: zod
      .string()
      .trim()
      .min(1, 'Password confirmation is required'),
    username: zod.string().trim().min(1, 'Username is required'),
    profileImage: zod.instanceof(File).nullable(),
    terms: zod.literal<boolean>(true, {
      errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords must match',
    path: ['passwordConfirmation'],
  });

type FormValues = zod.infer<typeof schema>;

const initialValues: FormValues = {
  email: '',
  name: '',
  password: '',
  passwordConfirmation: '',
  username: '',
  profileImage: null,
  terms: false,
};

export type SignUpFormProps = {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (data: {
    email: string;
    password: string;
    name: string;
    username: string;
    profileImage: File | null;
  }) => void;
  children?: ReactNode;
};

export function SignUpForm({
  isLoading,
  errorMessage,
  onSubmit,
  children,
}: SignUpFormProps) {
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
          id="name"
          name="name"
          label="Name"
          type="text"
          required
          autoFocus
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <InputField
          id="username"
          name="username"
          label="Username"
          type="text"
          required
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          required
          placeholder="e.g. john@doe.com"
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
        <InputField
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Password Confirmation"
          type="password"
          required
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <SingleFileUploadField
          id="profileImage"
          name="profileImage"
          label="Profile Image"
          accept="image/*"
        />
        <CheckboxField
          id="terms"
          name="terms"
          label={
            <>
              I agree with the{' '}
              <RouterLink to={route.terms()}>terms and conditions</RouterLink>
            </>
          }
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
        Sign Up
      </Button>
      {children}
    </Form>
  );
}
