import { Practical01Page } from './modules/static-pages/pages/Practical01Page';
import { Practical03Page } from './modules/static-pages/Practical03Page/Practical03Page';
import { TodosPage } from './modules/todo/pages/TodosPage';

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
  { id: '02', PageComponent: TodosPage },
  { id: '03', PageComponent: Practical03Page, wrapperProps: {} },
];
