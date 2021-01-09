import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/aspire-components.esm.js'
    },
    plugins: [
      vue({ css: false }),
      postcss({
        modules: true
      }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      })
    ]
  },
  // SSR build.
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/aspire-components.ssr.js'
    },
    plugins: [
      vue({ css: false, template: { optimizeSSR: true } }),
      postcss({
        modules: true
      }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      })
    ]
  },
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/aspire-components.js'
    },
    plugins: [
      vue({ css: false }),
      postcss({
        modules: true
      }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      })
    ]
  }
]
