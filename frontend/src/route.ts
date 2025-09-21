import { Practical01Page } from './modules/static-pages/pages/Practical01Page';

export const route = {
  home: () => `/`,
  practical: (id: string) => `/practical/${id}`,
  about: () => `/about`,
  terms: () => `/terms`,
  signIn: () => `/auth/signin`,
  signUp: () => `/auth/signup`,
  userDetail: (username: string) => `/${username}`,
};

export const PRACTICALS = [
  // Practical pages
  { id: '01', PageComponent: Practical01Page, wrapperProps: {} },
];
