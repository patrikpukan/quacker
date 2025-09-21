import { Ref } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import {
  Link,
  LinkProps,
} from '@frontend/shared/design-system/components/atoms/Link';

type Props = Omit<LinkProps, 'asChild'> & {
  to: string;
  ref?: Ref<HTMLAnchorElement>;
};

export function RouterLink({ children, to, ...rest }: Props) {
  return (
    <Link asChild {...rest}>
      <ReactRouterLink to={to}>{children}</ReactRouterLink>
    </Link>
  );
}
