import { Box } from '@chakra-ui/react';

import { route } from '@frontend/route';
import { Heading } from '@frontend/shared/design-system/components';
import { MainSection, TopNavigation } from '@frontend/shared/navigation';
import { RouterLink } from '@frontend/shared/navigation/atoms/RouterLink';

import { SignUpForm } from '../organisms/SignUpForm';

export type SignUpTemplateProps = {
  isLoading: boolean;
  error?: Error;
  onSubmit: (data: {
    email: string;
    password: string;
    username: string;
    name: string;
    profileImage: File | null;
  }) => void;
};

export function SignUpTemplate({
  isLoading,
  error,
  onSubmit,
}: SignUpTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading mb="4">Sign Up</Heading>

        <SignUpForm
          isLoading={isLoading}
          errorMessage={error?.message}
          onSubmit={onSubmit}
        >
          <Box>
            or <RouterLink to={route.signIn()}>Sign In</RouterLink>
          </Box>
        </SignUpForm>
      </MainSection>
    </>
  );
}
