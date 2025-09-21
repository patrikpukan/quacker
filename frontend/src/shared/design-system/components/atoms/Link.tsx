import { Ref } from 'react';
import {
  Link as ChakraLink,
  type LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

export type LinkProps = ChakraLinkProps & {
  noUnderline?: boolean;
  ref?: Ref<HTMLAnchorElement>;
};

export function Link({ noUnderline, ...rest }: LinkProps) {
  return (
    <ChakraLink
      color="green.600"
      _hover={{ textDecoration: noUnderline ? 'none' : 'underline' }}
      {...rest}
    />
  );
}
