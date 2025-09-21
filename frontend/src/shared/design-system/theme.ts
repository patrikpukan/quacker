import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    tokens: {
      animations: {
        spin: { value: 'spin 2s linear infinite' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
