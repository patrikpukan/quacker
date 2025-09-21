import { Button } from '@chakra-ui/react';

import {
  ErrorBanner,
  Loading,
} from '@frontend/shared/design-system/components';

import { type BaseQuackFragmentType } from '../graphql/BaseQuackFragment';
import { Quack } from '../molecules/Quack';

export type QuackListProps = {
  quacks: Array<BaseQuackFragmentType & { id: string }>;
  isLoading?: boolean;
  error?: Error;
  refetch?: () => void;
};

export function QuackList({
  quacks,
  isLoading,
  error,
  refetch,
}: QuackListProps) {
  return (
    <>
      {isLoading && !quacks && <Loading />}
      {error && (
        <ErrorBanner mt="4" title={error.message}>
          {refetch && (
            <Button colorScheme="red" onClick={() => refetch()}>
              Reload
            </Button>
          )}
        </ErrorBanner>
      )}
      {quacks &&
        quacks.map((quack) => <Quack key={quack.id} quackFragment={quack} />)}
    </>
  );
}
