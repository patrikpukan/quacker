import { useQuery } from '@apollo/client';

import { gql } from '@frontend/gql';
import { useAuth } from '@frontend/modules/auth/use-auth.hook';
import { useAddQuackFormState } from '@frontend/modules/quack/hooks/useAddQuackFormState';

import { HomeTemplate } from '../templates/HomeTemplate';

const QUACKS_QUERY = gql(/* GraphQL */ `
  query Quacks {
    quacks {
      id
      ...BaseQuack
    }
  }
`);

export function HomePage() {
  const { user } = useAuth();

  const quacksFetcher = useQuery(QUACKS_QUERY);

  const refetchQuacks = () => {
    quacksFetcher.refetch();
  };

  const quackFormState = useAddQuackFormState({ onCompleted: refetchQuacks });

  return (
    <HomeTemplate
      data={quacksFetcher.data}
      error={quacksFetcher.error}
      loading={quacksFetcher.loading}
      refetchQuacks={refetchQuacks}
      quackFormState={quackFormState}
      currentUser={user}
    />
  );
}
