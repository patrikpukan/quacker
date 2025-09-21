import { createContext, useContext } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

// Create a context to store the Apollo client
export const ApolloContext =
  createContext<ApolloClient<NormalizedCacheObject> | null>(null);

// Custom hook to use the Apollo client
export function useApolloClient() {
  const client = useContext(ApolloContext);

  if (!client) {
    throw new Error('useApolloClient must be used within an ApolloProvider');
  }

  return client;
}
