import { useNavigate } from 'react-router';

import { SignInTemplate } from '@frontend/modules/auth/templates/SignInTemplate';
import { useAuth } from '@frontend/modules/auth/use-auth.hook';

export function SignInPage() {
  const { signIn, isPending, signInError, setSignInError } = useAuth();
  const navigate = useNavigate();

  const handleSignInFormSubmit = async (variables: {
    email: string;
    password: string;
  }) => {
    const { error } = await signIn(variables.email, variables.password);
    if (error) {
      setSignInError(new Error(error.message));
      return;
    }
    navigate('/');
  };

  return (
    <SignInTemplate
      isLoading={isPending}
      error={signInError}
      onSubmit={handleSignInFormSubmit}
    />
  );
}
