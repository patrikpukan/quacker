/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any };
};

export type Mutation = {
  __typename?: 'Mutation';
  addQuack: Quack;
  deleteQuack: Scalars['String']['output'];
  deleteUser: User;
  signUp: User;
  updateUser: User;
};

export type MutationAddQuackArgs = {
  text: Scalars['String']['input'];
};

export type MutationDeleteQuackArgs = {
  quackId: Scalars['Float']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSignUpArgs = {
  data: SignUpInputType;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInputType;
};

export type Quack = {
  __typename?: 'Quack';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

/** Event emitted when a new quack is created. Subscribe via the `quackCreated` subscription field */
export type QuackCreatedEventType = {
  __typename?: 'QuackCreatedEventType';
  /** The id of the newly created quack */
  quackId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  quacks: Array<Quack>;
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export type SignUpInputType = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profilePicture?: InputMaybe<Scalars['Upload']['input']>;
  username: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  quackCreated: QuackCreatedEventType;
};

export type UpdateUserInputType = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRoleEnum>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  quacks: Array<Quack>;
  role: UserRoleEnum;
  username: Scalars['String']['output'];
};

/** User role */
export enum UserRoleEnum {
  Admin = 'admin',
  User = 'user',
}

export type SignUpMutationVariables = Exact<{
  data: SignUpInputType;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    username: string;
    profileImageUrl?: string | null;
    role: UserRoleEnum;
  };
};

export type AddQuackMutationVariables = Exact<{
  text: Scalars['String']['input'];
}>;

export type AddQuackMutation = {
  __typename?: 'Mutation';
  addQuack: { __typename?: 'Quack'; id: string };
};

export type BaseQuackFragment = {
  __typename?: 'Quack';
  id: string;
  createdAt: any;
  text: string;
  user: {
    __typename?: 'User';
    id: string;
    name: string;
    username: string;
    profileImageUrl?: string | null;
  };
} & { ' $fragmentName'?: 'BaseQuackFragment' };

export type QuackUserDetailFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  username: string;
  profileImageUrl?: string | null;
  quacks: Array<
    { __typename?: 'Quack'; id: string } & {
      ' $fragmentRefs'?: { BaseQuackFragment: BaseQuackFragment };
    }
  >;
} & { ' $fragmentName'?: 'QuackUserDetailFragment' };

export type QuacksQueryVariables = Exact<{ [key: string]: never }>;

export type QuacksQuery = {
  __typename?: 'Query';
  quacks: Array<
    { __typename?: 'Quack'; id: string } & {
      ' $fragmentRefs'?: { BaseQuackFragment: BaseQuackFragment };
    }
  >;
};

export type UserDetailQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;

export type UserDetailQuery = {
  __typename?: 'Query';
  user?:
    | ({ __typename?: 'User' } & {
        ' $fragmentRefs'?: { QuackUserDetailFragment: QuackUserDetailFragment };
      })
    | null;
};

export const BaseQuackFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseQuack' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Quack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profileImageUrl' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BaseQuackFragment, unknown>;
export const QuackUserDetailFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'QuackUserDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileImageUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'quacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BaseQuack' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseQuack' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Quack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profileImageUrl' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuackUserDetailFragment, unknown>;
export const SignUpDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignUp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'SignUpInputType' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signUp' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'data' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profileImageUrl' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const AddQuackDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddQuack' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addQuack' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'text' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'text' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddQuackMutation, AddQuackMutationVariables>;
export const QuacksDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Quacks' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'quacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BaseQuack' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseQuack' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Quack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profileImageUrl' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QuacksQuery, QuacksQueryVariables>;
export const UserDetailDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'UserDetail' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'username' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'username' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'username' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'QuackUserDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BaseQuack' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Quack' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profileImageUrl' },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'QuackUserDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'profileImageUrl' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'quacks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'BaseQuack' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserDetailQuery, UserDetailQueryVariables>;
