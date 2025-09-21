import { route } from '@frontend/route';
import { Paragraph } from '@frontend/shared/design-system/components';
import { RouterLink } from '@frontend/shared/navigation/atoms/RouterLink';

import { PlaceholderTemplate } from '../templates';

export function NotFoundPage() {
  return (
    <PlaceholderTemplate title="Error 404">
      <Paragraph>
        Page not found, please return to{' '}
        <RouterLink to={route.home()}>Home</RouterLink>.
      </Paragraph>
    </PlaceholderTemplate>
  );
}
