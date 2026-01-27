import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Para GitHub Pages: use o nome do seu repositório como base
// Exemplo: se o repositório for "meu-projeto", altere 'testeCursor' para 'meu-projeto'
const repositoryName = process.env.VITE_REPO_NAME || 'testeCursor'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
})
