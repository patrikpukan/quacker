import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { AddQuackMutation } from '@frontend/modules/quack/graphql/AddQuackMutation';
import { type AddQuackFormState } from '@frontend/modules/quack/types/addQuackForm';

type UseAddQuackFormStateOptions = {
  onCompleted?: () => void;
};

export function useAddQuackFormState({
  onCompleted,
}: UseAddQuackFormStateOptions = {}): AddQuackFormState {
  const [quackFormText, setQuackFormText] = useState('');
  const [quackMutationRequest, quackMutationRequestState] = useMutation(
    AddQuackMutation,
    {
      onCompleted: () => {
        setQuackFormText('');
        onCompleted?.();
      },
      onError: () => {},
    },
  );

  return {
    isLoading: quackMutationRequestState.loading,
    error: quackMutationRequestState.error,
    text: quackFormText,
    setText: setQuackFormText,
    onSubmit: ({ text }: { text: string }) => {
      quackMutationRequest({ variables: { text } });
    },
  };
}
