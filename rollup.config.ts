import path from 'path'
import typescriptPlugin from '@rollup/plugin-typescript';

export default {
  input: path.resolve('./src/index.ts'),
  output: {
    file: path.resolve('dist/index.js'),
    format: 'es',
    sourcemap: false
  },
  plugins: [
    typescriptPlugin()
  ]
};