import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { authClient } from '@frontend/utils/auth-client';

import { SignUpMutation } from './graphql/SignUpMutation';

export type User = {
  id: string;
  email: string;
  name: string;
  role?: string;
  profileImageUrl?: string;
  username: string;
};

export function useAuth() {
  const { data, isPending, error: authError } = authClient.useSession();

  const [signInError, setSignInError] = useState<Error | undefined>(undefined);

  const user: User | null = data?.user
    ? {
        id: data?.user?.id,
        email: data?.user?.email,
        name: data?.user?.name,
        profileImageUrl: data?.user?.image ?? undefined,
        username: data?.user?.username ?? '',

        // todo: figure out how to properly type this
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        role: (data?.user as any)?.role ?? undefined,
      }
    : null;

  // Transform BetterAuth error to regular Error
  const error = authError
    ? new Error(authError.message || 'Authentication error')
    : undefined;

  const signIn = async (
    email: string,
    password: string,
    rememberMe = false,
    callbackURL?: string,
  ) =>
    await authClient.signIn.email({ email, password, rememberMe, callbackURL });

  const signOut = async () => await authClient.signOut();

  const [
    signUp,
    { data: signUpData, loading: isSignUpPending, error: signUpError },
  ] = useMutation(SignUpMutation);

  return {
    isPending,
    error,
    user,
    signIn,
    signOut,
    signUp,
    signUpData,
    signInError,
    signUpError,
    isSignUpPending,
    setSignInError,
  };
}
