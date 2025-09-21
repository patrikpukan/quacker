import { Link, type LinkProps } from '@chakra-ui/react';

export type ChakraNavLinkProps = LinkProps;

export function NavLink(props: LinkProps) {
  return (
    <Link
      fontSize="sm"
      px="4"
      py="3"
      display="flex"
      alignItems="center"
      _hover={{ bg: 'blackAlpha.400' }}
      _active={{ bg: 'blackAlpha.300' }}
      _focus={{ outline: 'none' }}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'green.500',
        outlineOffset: '2px',
      }}
      {...props}
    />
  );
}
