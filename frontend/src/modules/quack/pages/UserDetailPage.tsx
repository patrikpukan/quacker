import { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router';

import { gql } from '@frontend/gql';
import { useAuth } from '@frontend/modules/auth/use-auth.hook';
import { useAddQuackFormState } from '@frontend/modules/quack/hooks/useAddQuackFormState';
import { NotFoundPage } from '@frontend/shared/navigation';

import { UserDetailTemplate } from '../templates/UserDetailTemplate';

const USER_DETAIL_QUERY = gql(/* GraphQL */ `
  query UserDetail($username: String!) {
    user(username: $username) {
      ...QuackUserDetail
    }
  }
`);

export function UserDetailPage() {
  const { user } = useAuth();
  const { username } = useParams();

  const userFetcher = useQuery(USER_DETAIL_QUERY, {
    variables: { username: username ?? '' },
  });

  const { refetch } = userFetcher;

  const refetchUser = useCallback(() => {
    refetch();
  }, [refetch]);

  const quackFormState = useAddQuackFormState({
    onCompleted: userFetcher.refetch,
  });

  if (userFetcher.data?.user === null) {
    return <NotFoundPage />;
  }

  return (
    <UserDetailTemplate
      userFragment={userFetcher.data?.user ?? null}
      loading={userFetcher.loading}
      error={userFetcher.error}
      onReload={refetchUser}
      quackFormState={quackFormState}
      currentUser={user}
      username={username}
    />
  );
}
