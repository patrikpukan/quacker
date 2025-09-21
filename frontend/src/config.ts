export const config = {
  GRAPHQL_API: import.meta.env.VITE_GRAPHQL_API,
  BETTER_AUTH_URL: import.meta.env.VITE_BETTER_AUTH || 'http://localhost:4000',
  UPLOADS_URL: import.meta.env.VITE_UPLOADS || 'http://localhost:4000',
};
