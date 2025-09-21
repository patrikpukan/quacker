import {
  type ResultOf,
  type VariablesOf,
} from '@graphql-typed-document-node/core';

import { gql } from '@frontend/gql';

export const AddQuackMutation = gql(/* GraphQL */ `
  mutation AddQuack($text: String!) {
    addQuack(text: $text) {
      id
    }
  }
`);

export type AddQuackMutationVariables = VariablesOf<typeof AddQuackMutation>;

export type AddQuackMutationResult = ResultOf<typeof AddQuackMutation>;
