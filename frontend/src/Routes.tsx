import { Route, Routes as RouterRoutes } from 'react-router';

import { HomePage, UserDetailPage } from '@frontend/modules/quack';
import { NotFoundPage, PageWrapper } from '@frontend/shared/navigation';

import { SignInPage } from './modules/auth/pages/SignInPage';
import { SignUpPage } from './modules/auth/pages/SignUpPage';
import { AboutPage } from './modules/static-pages/pages/AboutPage';
import { TermsAndConditionsPage } from './modules/static-pages/pages/TermsAndConditionsPage';
import { PRACTICALS, route } from './route';

export function Routes() {
  return (
    <RouterRoutes>
      <Route path={route.home()} element={<HomePage />} />
      {PRACTICALS.map(({ id, PageComponent, wrapperProps = {} }) => (
        <Route
          path={route.practical(id)}
          key={id}
          element={
            <PageWrapper {...wrapperProps}>
              <PageComponent />
            </PageWrapper>
          }
        />
      ))}
      <Route path={route.about()} element={<AboutPage />} />
      <Route path={route.terms()} element={<TermsAndConditionsPage />} />
      <Route path={route.signIn()} element={<SignInPage />} />
      <Route path={route.signUp()} element={<SignUpPage />} />
      <Route
        path={route.userDetail(':username')}
        element={<UserDetailPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
