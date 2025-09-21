import { type ResultOf } from '@graphql-typed-document-node/core';

import { type FragmentType, gql } from '@frontend/gql';

export const QuackUserDetailFragment = gql(/* GraphQL */ `
  fragment QuackUserDetail on User {
    id
    name
    username
    profileImageUrl
    quacks {
      id
      ...BaseQuack
    }
  }
`);

export type QuackUserDetailFragmentType = FragmentType<
  typeof QuackUserDetailFragment
>;

export type QuackUserDetailResult = ResultOf<typeof QuackUserDetailFragment>;
