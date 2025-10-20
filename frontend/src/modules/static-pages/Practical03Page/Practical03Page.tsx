import { VStack } from '@chakra-ui/react';

import NotificationsForm from '@frontend/modules/static-pages/Practical03Page/NotificationsForm';
import ProfileForm from '@frontend/modules/static-pages/Practical03Page/ProfileForm';
import {
  BodyBackground,
  Heading,
  Paragraph,
} from '@frontend/shared/design-system/components';

export function Practical03Page() {
  return (
    <>
      <BodyBackground bg="gray.100" />
      <Heading pb="4">Practical 03</Heading>

      <VStack gap={8} align="stretch">
        <VStack gap={4} align="stretch" p="8" bg="white" borderRadius="md">
          <Heading>Profile</Heading>
          <Paragraph>This is your profile information.</Paragraph>

          <ProfileForm />
        </VStack>

        <VStack gap={4} align="stretch" p="8" bg="white" borderRadius="md">
          <Heading>Notifications</Heading>
          <Paragraph>Setup how much notification you will receive</Paragraph>

          <NotificationsForm />
        </VStack>
      </VStack>
    </>
  );
}
