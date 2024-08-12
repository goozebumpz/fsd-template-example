import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sass from 'sass'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'shared': path.resolve(__dirname, './src/shared'),
      'entities': path.resolve(__dirname, './src/entities/index.ts'),
      'features': path.resolve(__dirname, './src/features/index.ts'),
      'widgets': path.resolve(__dirname, './src/widgets/index.ts'),
      'pages': path.resolve(__dirname, './src/pages/index.ts'),
      'app': path.resolve(__dirname, './src/app/')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
