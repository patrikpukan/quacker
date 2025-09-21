import { Button } from '@chakra-ui/react';

import { useFragment } from '@frontend/gql';
import { User } from '@frontend/modules/auth/use-auth.hook';
import { type AddQuackFormState } from '@frontend/modules/quack/types/addQuackForm';
import {
  ErrorBanner,
  Loading,
  ReloadButton,
} from '@frontend/shared/design-system/components';
import { MainSection, TopNavigation } from '@frontend/shared/navigation';

import {
  QuackUserDetailFragment,
  type QuackUserDetailFragmentType,
} from '../graphql/QuackUserDetailFragment';
import { QuackForm } from '../molecules/QuackForm';
import { UserDetailHeader } from '../molecules/UserDetailHeader';
import { QuackList } from '../organisms/QuackList';

type Props = {
  username?: string;
  userFragment: QuackUserDetailFragmentType | null;
  loading: boolean;
  error?: Error;
  onReload: () => void;
  quackFormState: AddQuackFormState;
  currentUser: User | null;
};

export function UserDetailTemplate({
  username,
  userFragment,
  loading,
  error,
  onReload,
  quackFormState,
  currentUser,
}: Props) {
  const showQuackForm =
    quackFormState && currentUser && currentUser.username === username;

  const user = useFragment(QuackUserDetailFragment, userFragment);

  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        {loading && !user && <Loading />}

        {error && (
          <ErrorBanner title={error.message}>
            <Button colorScheme="red" onClick={onReload}>
              Reload
            </Button>
          </ErrorBanner>
        )}

        {user ? (
          <>
            <UserDetailHeader
              name={user.name}
              username={user.username}
              profileImageUrl={user.profileImageUrl}
            />
            {showQuackForm && <QuackForm {...quackFormState} mt="2" />}
            <ReloadButton
              onClick={onReload}
              isLoading={loading}
              float="right"
            />
            <QuackList quacks={user.quacks} />
          </>
        ) : null}
      </MainSection>
    </>
  );
}
