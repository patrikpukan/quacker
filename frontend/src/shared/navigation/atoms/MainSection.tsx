import { type ReactNode } from 'react';
import { Box, BoxProps, Center } from '@chakra-ui/react';

export type MainSectionProps = BoxProps & {
  children: ReactNode;
};

export function MainSection({ children, ...restProps }: MainSectionProps) {
  return (
    <Center borderTop="1px" borderColor="blackAlpha.200">
      <Box as="section" m="4" minW="30rem" {...restProps}>
        {children}
      </Box>
    </Center>
  );
}
