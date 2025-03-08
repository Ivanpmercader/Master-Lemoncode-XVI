import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),
    {
      name: 'graphql-loader',
      transform(code, id) {
        if (id.endsWith('.graphql')) {
          return `export default ${JSON.stringify(code)};`;
        }
      }
    }
  ],
  server: {
    proxy: {
      '/graphql': 'http://rickandmortyapi.com',
      '/thumbnails': 'http://localhost:3000',
    },
  },
});
