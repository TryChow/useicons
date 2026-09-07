import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2019',
  platform: 'neutral',
  external: ['react', 'react/jsx-runtime', 'react-dom', 'motion', 'motion/react'],
  banner: {
    js: '"use client";',
  },
});
