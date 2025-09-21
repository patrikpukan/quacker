import { useNavigate } from 'react-router';

import { authClient } from '@frontend/utils/auth-client';

import { SignUpTemplate } from '../templates/SignUpTemplate';
import { useAuth } from '../use-auth.hook';

export function SignUpPage() {
  const navigate = useNavigate();
  const { signUp, signUpError, isSignUpPending } = useAuth();

  const handleSignUpFormSubmit = async (variables: {
    email: string;
    name: string;
    username: string;
    password: string;
    profileImage: File | null;
  }) => {
    await signUp({
      variables: {
        data: {
          email: variables.email,
          password: variables.password,
          name: variables.name,
          username: variables.username,
          profilePicture: variables.profileImage ?? undefined,
        },
      },
      onCompleted: async () => {
        await authClient.signIn.email({
          email: variables.email,
          password: variables.password,
        });
        navigate('/');
      },
    });
  };

  return (
    <SignUpTemplate
      isLoading={isSignUpPending}
      error={signUpError}
      onSubmit={handleSignUpFormSubmit}
    />
  );
}
