import {
  Button,
  createListCollection,
  Field,
  HStack,
  Input,
  Select,
  Switch,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

type Visibility = 'public' | 'friends' | 'private';

const visibilityOptions = createListCollection<{
  label: string;
  value: Visibility;
}>({
  items: [
    { label: 'Public', value: 'public' },
    { label: 'Only friends', value: 'friends' },
    { label: 'Private', value: 'private' },
  ],
});

// Define Zod schemas for validation
const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  bio: z.string().min(1, 'Bio is required'),
  visibility: z.enum(['public', 'friends', 'private']),
  agreeToc: z
    .boolean()
    .refine((value) => value, 'You must agree to the terms and conditions'),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
      visibility: 'public',
      agreeToc: false,
    },
  });

  const onProfileSubmit = async (data: ProfileFormData) => {
    console.log('✅ Profile submitted:', data);
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onProfileSubmit)}
      gap={4}
      align="stretch"
    >
      <Field.Root invalid={!!errors.firstName}>
        <Field.Label>First name</Field.Label>
        <Input {...register('firstName')} placeholder="Enter your first name" />
        <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.lastName}>
        <Field.Label>Last name</Field.Label>
        <Input {...register('lastName')} placeholder="Enter your last name" />
        <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.username}>
        <Field.Label>Username</Field.Label>
        <Input {...register('username')} placeholder="Enter your username" />
        <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.email}>
        <Field.Label>Email</Field.Label>
        <Input
          type="email"
          {...register('email')}
          placeholder="john@example.com"
        />
        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
      </Field.Root>

      <Field.Root invalid={!!errors.bio}>
        <Field.Label>Profile bio</Field.Label>
        <Textarea
          {...register('bio')}
          placeholder="Tell us about yourself"
          rows={3}
        />
        <Field.ErrorText>{errors.bio?.message}</Field.ErrorText>
      </Field.Root>

      <Controller
        name="visibility"
        control={control}
        render={({ field, fieldState }) => (
          <Field.Root invalid={!!fieldState.error}>
            <Field.Label>Visibility</Field.Label>
            <Select.Root
              collection={visibilityOptions}
              value={[field.value]}
              onValueChange={(event) => field.onChange(event.items[0].value)}
            >
              <Select.HiddenSelect />
              <Select.Control>
                <Select.Trigger>
                  <Select.ValueText placeholder="Select visibility" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>
              <Select.Positioner>
                <Select.Content>
                  {visibilityOptions.items.map((option) => (
                    <Select.Item item={option} key={option.value}>
                      {option.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Select.Root>
            <Field.ErrorText>{fieldState.error?.message}</Field.ErrorText>
          </Field.Root>
        )}
      />

      <Controller
        name="agreeToc"
        control={control}
        render={({ field, fieldState }) => (
          <Field.Root invalid={!!fieldState.error}>
            <HStack>
              <Switch.Root
                checked={field.value}
                onCheckedChange={(details) => field.onChange(details.checked)}
              >
                <Switch.HiddenInput onBlur={field.onBlur} />
                <Switch.Control />
              </Switch.Root>
              <Field.Label>Agree to Terms and Conditions</Field.Label>
            </HStack>
            <Field.ErrorText>{fieldState.error?.message}</Field.ErrorText>
          </Field.Root>
        )}
      />

      <HStack justify="flex-end">
        <Button
          type="submit"
          colorPalette="green"
          loading={isSubmitting}
          loadingText="Saving..."
        >
          Save
        </Button>
      </HStack>
    </VStack>
  );
};

export default ProfileForm;
