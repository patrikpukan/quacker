import { usernameClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

import { config } from '@frontend/config';

export const authClient = createAuthClient({
  baseURL: config.BETTER_AUTH_URL,
  plugins: [usernameClient()],
});
