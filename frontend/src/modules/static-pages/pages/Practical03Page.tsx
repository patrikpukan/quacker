import { createListCollection } from '@ark-ui/react';
import {
  Box,
  Button,
  Field,
  Flex,
  Input,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Textarea,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { FaChevronDown as ChevronDownIcon } from 'react-icons/fa';
import { z } from 'zod';

import { Heading, Paragraph } from '@frontend/shared/design-system/components';

const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  username: z.string().min(1, 'Username is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  bio: z.string().min(1, 'Profile bio is required'),
  visibility: z.enum(['public', 'friends', 'private'], {
    required_error: 'Visibility is required',
  }),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to Terms and Conditions',
  }),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const notificationsSchema = z.object({
  notificationPreference: z.enum(['all', 'mentions', 'never'], {
    required_error: 'Please select a notification preference',
  }),
});

type NotificationsFormValues = z.infer<typeof notificationsSchema>;

export function Practical03Page() {
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      bio: '',
      visibility: 'public',
      agreeToTerms: false,
    },
  });

  const {
    register: profileRegister,
    control: profileControl,
    formState: { errors: profileErrors },
    handleSubmit: handleProfileSubmit,
  } = profileForm;

  const notificationsForm = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsSchema),
    mode: 'onSubmit',
    defaultValues: {
      notificationPreference: 'mentions',
    },
  });

  const {
    control: notificationsControl,
    formState: { errors: notificationsErrors },
    handleSubmit: handleNotificationsSubmit,
  } = notificationsForm;

  const onSubmitProfile = (values: ProfileFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const onSubmitNotifications = (values: NotificationsFormValues) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Box>
      <Heading>Practical 03</Heading>

      <Box
        mt="4"
        p={{ base: '4', md: '6' }}
        bg="gray.50"
        border="1px"
        borderColor="blackAlpha.200"
        borderRadius="xl"
        boxShadow="sm"
      >
        <Heading as="h2">Profile</Heading>
        <Paragraph color="gray.600" mb="6">
          This is your profile information.
        </Paragraph>

        <form noValidate onSubmit={handleProfileSubmit(onSubmitProfile)}>
          <Stack gap="4">
            <Field.Root invalid={!!profileErrors.firstName}>
              <Field.Label>First name</Field.Label>
              <Input
                placeholder="Enter your first name"
                {...profileRegister('firstName')}
              />
              {profileErrors.firstName && (
                <Field.ErrorText>
                  {profileErrors.firstName.message}
                </Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={!!profileErrors.lastName}>
              <Field.Label>Last name</Field.Label>
              <Input
                placeholder="Enter your last name"
                {...profileRegister('lastName')}
              />
              {profileErrors.lastName && (
                <Field.ErrorText>
                  {profileErrors.lastName.message}
                </Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={!!profileErrors.username}>
              <Field.Label>Username</Field.Label>
              <Input
                placeholder="Enter your username"
                {...profileRegister('username')}
              />
              {profileErrors.username && (
                <Field.ErrorText>
                  {profileErrors.username.message}
                </Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={!!profileErrors.email}>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                placeholder="john@example.com"
                {...profileRegister('email')}
              />
              {profileErrors.email && (
                <Field.ErrorText>{profileErrors.email.message}</Field.ErrorText>
              )}
            </Field.Root>

            <Field.Root invalid={!!profileErrors.bio}>
              <Field.Label>Profile bio</Field.Label>
              <Textarea
                placeholder="Tell us about yourself"
                minH="28"
                {...profileRegister('bio')}
              />
              {profileErrors.bio && (
                <Field.ErrorText>{profileErrors.bio.message}</Field.ErrorText>
              )}
            </Field.Root>

            <Controller
              name="visibility"
              control={profileControl}
              render={({ field }) => (
                <Field.Root invalid={!!profileErrors.visibility}>
                  <Field.Label>Visibility</Field.Label>
                  <Box w="100%">
                    {(() => {
                      const items = [
                        { label: 'Public', value: 'public' },
                        { label: 'Friends', value: 'friends' },
                        { label: 'Private', value: 'private' },
                      ];
                      const collection = createListCollection({
                        items,
                        itemToString: (item) => item.label,
                      });
                      return (
                        <Select.Root
                          w="100%"
                          collection={collection}
                          value={field.value ? [field.value] : []}
                          onValueChange={(details) =>
                            field.onChange(details.value?.[0] ?? '')
                          }
                        >
                          <Select.Control w="100%">
                            <Select.Trigger
                              w="100%"
                              justifyContent="space-between"
                            >
                              <Select.ValueText placeholder="Select option" />
                              <Select.Indicator>
                                <ChevronDownIcon />
                              </Select.Indicator>
                            </Select.Trigger>
                          </Select.Control>
                          <Select.Positioner>
                            <Select.Content>
                              {items.map((item) => (
                                <Select.Item key={item.value} item={item}>
                                  <Select.ItemText>
                                    {item.label}
                                  </Select.ItemText>
                                  <Select.ItemIndicator />
                                </Select.Item>
                              ))}
                            </Select.Content>
                          </Select.Positioner>
                        </Select.Root>
                      );
                    })()}
                  </Box>
                  {profileErrors.visibility && (
                    <Field.ErrorText>
                      {profileErrors.visibility.message}
                    </Field.ErrorText>
                  )}
                </Field.Root>
              )}
            />

            <Controller
              name="agreeToTerms"
              control={profileControl}
              render={({ field }) => (
                <Field.Root invalid={!!profileErrors.agreeToTerms}>
                  <Box pt="2">
                    <Switch.Root
                      checked={field.value}
                      onCheckedChange={(details) =>
                        field.onChange(details.checked)
                      }
                    >
                      <Switch.HiddenInput />
                      <Switch.Control />
                      <Switch.Label>Agree to Terms and Conditions</Switch.Label>
                    </Switch.Root>
                    {profileErrors.agreeToTerms && (
                      <Field.ErrorText>
                        {profileErrors.agreeToTerms.message}
                      </Field.ErrorText>
                    )}
                  </Box>
                </Field.Root>
              )}
            />

            <Flex justifyContent="flex-end" pt="2">
              <Button type="submit" colorPalette="green">
                Save
              </Button>
            </Flex>
          </Stack>
        </form>
      </Box>

      <Box
        mt="4"
        p={{ base: '4', md: '6' }}
        bg="gray.50"
        border="1px"
        borderColor="blackAlpha.200"
        borderRadius="xl"
        boxShadow="sm"
      >
        <Heading as="h2">Notifications</Heading>
        <Paragraph color="gray.600" mb="6">
          Setup how much notification you will receive
        </Paragraph>

        <form
          noValidate
          onSubmit={handleNotificationsSubmit(onSubmitNotifications)}
        >
          <Field.Root invalid={!!notificationsErrors.notificationPreference}>
            <Controller
              name="notificationPreference"
              control={notificationsControl}
              render={({ field }) => (
                <RadioGroup.Root
                  colorPalette="gray"
                  value={field.value}
                  onValueChange={(details) => field.onChange(details.value)}
                >
                  <Stack gap="4">
                    <RadioGroup.Item value="all">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>
                        Every time someone quacks
                      </RadioGroup.ItemText>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="mentions">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>
                        Only mentions (@username)
                      </RadioGroup.ItemText>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="never">
                      <RadioGroup.ItemHiddenInput />
                      <RadioGroup.ItemIndicator />
                      <RadioGroup.ItemText>Never</RadioGroup.ItemText>
                    </RadioGroup.Item>
                  </Stack>
                </RadioGroup.Root>
              )}
            />
            {notificationsErrors.notificationPreference && (
              <Field.ErrorText>
                {notificationsErrors.notificationPreference.message}
              </Field.ErrorText>
            )}
          </Field.Root>

          <Flex justifyContent="flex-end" pt="2">
            <Button type="submit" colorPalette="green">
              Save
            </Button>
          </Flex>
        </form>
      </Box>
    </Box>
  );
}
