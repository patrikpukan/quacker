import 'cross-fetch/polyfill';

import { ReactNode, useCallback, useMemo } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
} from '@apollo/client';
import { NetworkError } from '@apollo/client/errors';
import { onError } from '@apollo/client/link/error';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { GraphQLFormattedError } from 'graphql';
import { useNavigate } from 'react-router';

import { config } from '@frontend/config';
import { route } from '@frontend/route';

import { ApolloContext } from './apollo-context';

type Props = {
  children: ReactNode;
};

export function EnhancedApolloProvider({ children }: Props) {
  const navigate = useNavigate();

  const handleAuthError = useCallback(() => {
    navigate(route.signIn());
    window.location.reload();
  }, [navigate]);

  const logoutLink = onError(({ graphQLErrors, networkError }) => {
    if (
      hasUnauthenticatedErrorCode(graphQLErrors) ||
      hasNetworkStatusCode(networkError, 401)
    ) {
      handleAuthError();
    }
  });

  const cache = useMemo(
    () =>
      new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              // Example of cache configuration for specific queries
              // This helps with cache management and updates
              users: {
                merge(existing = [], incoming) {
                  return [...incoming];
                },
              },
            },
          },
        },
      }),
    [],
  );

  const client = useMemo(
    () =>
      new ApolloClient({
        link: from([logoutLink, uploadLink]),
        cache,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'cache-and-network',
          },
          query: {
            notifyOnNetworkStatusChange: true,
            fetchPolicy: 'cache-first',
          },
        },
        connectToDevTools: process.env.NODE_ENV === 'development',
      }),
    [logoutLink, cache],
  );

  return (
    <ApolloContext.Provider value={client}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ApolloContext.Provider>
  );
}

const UNAUTHENTICATED_CODE = 'UNAUTHENTICATED';

const hasUnauthenticatedErrorCode = (
  errors: readonly GraphQLFormattedError[] | undefined,
): boolean | null | undefined => {
  return (
    errors &&
    errors.some((error) => error.extensions?.code === UNAUTHENTICATED_CODE)
  );
};

const hasNetworkStatusCode = (
  error: NetworkError | undefined,
  code: number,
): boolean | null | undefined => {
  return error && 'statusCode' in error && error.statusCode === code;
};

const uploadLink = createUploadLink({
  uri: config.GRAPHQL_API,
  headers: {
    'Apollo-Require-Preflight': 'ok', // This is for CSRF
  },
  credentials: 'include', // This enables cookies to be sent with requests
});
