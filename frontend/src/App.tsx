import { BrowserRouter } from 'react-router';

import { Routes } from '@frontend/Routes';
import { Provider } from '@frontend/shared/design-system/Provider';
import { ScrollToTop } from '@frontend/shared/navigation';
import { EnhancedApolloProvider } from '@frontend/utils/apollo.tsx';

export function App() {
  return (
    <Provider>
      <BrowserRouter>
        <EnhancedApolloProvider>
          <ScrollToTop />
          <Routes />
        </EnhancedApolloProvider>
      </BrowserRouter>
    </Provider>
  );
}
