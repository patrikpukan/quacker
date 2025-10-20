import {
  Button,
  Field,
  HStack,
  RadioGroup,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const notificationsSchema = z.object({
  notificationsLevel: z.enum(['all', 'mentions', 'never']),
});

// Infer TypeScript types from the schemas
type NotificationsFormData = z.infer<typeof notificationsSchema>;

const NotificationsForm = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<NotificationsFormData>({
    resolver: zodResolver(notificationsSchema),
    defaultValues: {
      notificationsLevel: 'mentions',
    },
  });

  const onSubmit = async (data: NotificationsFormData) => {
    console.log('✅ Notifications submitted:', data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} gap={4} align="stretch">
      <Controller
        name="notificationsLevel"
        control={control}
        render={({ field, fieldState }) => (
          <Field.Root invalid={!!fieldState.error}>
            <RadioGroup.Root
              value={field.value}
              onValueChange={(details) => field.onChange(details.value)}
            >
              <Stack>
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

export default NotificationsForm;
