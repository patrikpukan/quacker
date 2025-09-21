import { User } from '@frontend/modules/auth/use-auth.hook';
import { type AddQuackFormState } from '@frontend/modules/quack/types/addQuackForm';
import {
  Heading,
  ReloadButton,
} from '@frontend/shared/design-system/components';
import { MainSection, TopNavigation } from '@frontend/shared/navigation';

import { type BaseQuackFragmentType } from '../graphql/BaseQuackFragment';
import { QuackForm } from '../molecules/QuackForm';
import { QuackList } from '../organisms/QuackList';

type Props = {
  data: { quacks: Array<BaseQuackFragmentType & { id: string }> } | undefined;
  loading: boolean;
  error?: Error;
  refetchQuacks: () => void;
  quackFormState: AddQuackFormState;
  currentUser: User | null;
};

export function HomeTemplate({
  data,
  loading,
  error,
  refetchQuacks,
  quackFormState,
  currentUser,
}: Props) {
  return (
    <>
      <TopNavigation />
      <MainSection maxW="30rem">
        <Heading pb="2">Home</Heading>

        {currentUser && <QuackForm {...quackFormState} />}

        {data && (
          <ReloadButton
            isLoading={loading}
            onClick={refetchQuacks}
            float="right"
          />
        )}

        <QuackList
          quacks={data?.quacks ?? []}
          isLoading={loading}
          error={error}
          refetch={refetchQuacks}
        />
      </MainSection>
    </>
  );
}
