import { Box } from '@chakra-ui/react';

import { route } from '@frontend/route';
import { Heading } from '@frontend/shared/design-system/components';
import { MainSection, TopNavigation } from '@frontend/shared/navigation';
import { RouterLink } from '@frontend/shared/navigation/atoms/RouterLink';

import { SignInForm } from '../organisms/SignInForm';

export type SignInTemplateProps = {
  isLoading: boolean;
  error?: Error;
  onSubmit: (data: { email: string; password: string }) => void;
};

export function SignInTemplate({
  isLoading,
  error,
  onSubmit,
}: SignInTemplateProps) {
  return (
    <>
      <TopNavigation />
      <MainSection>
        <Heading pb="4">Sign In</Heading>

        <SignInForm
          isLoading={isLoading}
          errorMessage={error && error.message}
          onSubmit={onSubmit}
        >
          <Box>
            or <RouterLink to={route.signUp()}>Sign Up</RouterLink>
          </Box>
        </SignInForm>
      </MainSection>
    </>
  );
}
