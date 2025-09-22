/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: { '/uploads': { target: env.VITE_UPLOADS, changeOrigin: true } },
      allowedHosts: env.VITE_ALLOWED_HOSTS
        ? env.VITE_ALLOWED_HOSTS.split(',')
        : ['dev-frontend-pukp00-vse.handson.pro', 'localhost', '127.0.0.1'],
    },
    build: { outDir: 'build', copyPublicDir: false },
    resolve: {
      alias: {
        // These must be kept in sync with tsconfig.json!
        '@frontend': resolve(__dirname, './src'),
        '@shared': resolve(__dirname, '../shared/src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './vitest.setup.ts',
    },
  };
});
