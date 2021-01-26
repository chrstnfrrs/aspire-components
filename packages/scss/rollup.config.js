import path from 'path';
import bundleScss from 'rollup-plugin-bundle-scss';

export default {
  input: path.resolve(__dirname, 'index.js'),
  output: {
    file: path.resolve(__dirname, 'build/index.js'),
    format: 'esm',
  },
  plugins: [
    bundleScss(),
  ],
};