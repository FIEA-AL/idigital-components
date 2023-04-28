import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Se os nossos arquivos .vue tiverem a tag 'style', serão compilados como um único arquivo .css em /dist.
  plugins: [Vue({ style: { filename: 'style.css' } })],
  test: {

    globals: true,
    environment: "jsdom",
  },
  build: {
    // Arquivos compilados para /dist.
    outDir: './dist',
    lib: {
      // Ponto de entrada (contém os componentes exportados).
      entry: resolve(__dirname, 'src/index.ts'),
      // Nome da biblioteca.
      name: 'idigital-components',
      fileName: (format) => `${'idigital-components'}.${format}.js`,
    },
    rollupOptions: {
      // Vue é provido pelo projeto pai, não compilar o código fonte do Vue dentro da biblioteca.
      external: ['vue'],
      output: { globals: { vue: 'Vue' } },
    },
  },
})