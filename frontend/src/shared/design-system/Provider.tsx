import { ChakraProvider } from '@chakra-ui/react';

import { system } from '@frontend/shared/design-system/theme';

type ProviderProps = {
  children: React.ReactNode;
};

export function Provider({ children }: ProviderProps) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
