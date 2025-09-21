import { TypedDocumentNode } from '@apollo/client';
import {
  type ResultOf,
  type VariablesOf,
} from '@graphql-typed-document-node/core';

import { gql } from '@frontend/gql';

// Define input type to match the backend schema
export interface SignUpInputType {
  email: string;
  password: string;
  name: string;
  username: string;
  profilePicture?: File;
}

// Define the result type
export interface SignUpMutationData {
  signUp: {
    id: string;
    name: string;
    email: string;
    username: string;
    profileImageUrl?: string;
    role: string;
  };
}

export const SignUpMutation = gql(/* GraphQL */ `
  mutation SignUp($data: SignUpInputType!) {
    signUp(data: $data) {
      id
      name
      email
      username
      profileImageUrl
      role
    }
  }
`) as unknown as TypedDocumentNode<
  SignUpMutationData,
  { data: SignUpInputType }
>;

export type SignUpMutationResult = ResultOf<typeof SignUpMutation>;
export type SignUpMutationVariables = VariablesOf<typeof SignUpMutation>;
