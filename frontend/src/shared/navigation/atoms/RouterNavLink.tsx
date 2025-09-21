import {
  NavLink as ReactRouterNavLink,
  type NavLinkProps as ReactRouterNavLinkProps,
} from 'react-router';

import {
  ChakraNavLinkProps,
  NavLink as ChakraNavLink,
} from '@frontend/shared/design-system/components';

type Props = Omit<ChakraNavLinkProps, 'asChild'> & ReactRouterNavLinkProps;

export function RouterNavLink(props: Props) {
  const { children, to, ...rest } = props;
  return (
    <ChakraNavLink asChild {...rest}>
      <ReactRouterNavLink
        to={to}
        style={({ isActive }) => ({
          backgroundColor: isActive ? 'rgba(0, 0, 0, 0.16)' : undefined,
          fontWeight: isActive ? 'bold' : undefined,
        })}
      >
        {children}
      </ReactRouterNavLink>
    </ChakraNavLink>
  );
}
