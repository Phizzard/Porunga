import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: 'src/components/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: `${pkg.module}.min.js`,
        format: 'iife',
        name: 'version',
        plugins: [terser()],
      },
      {
        file: `${pkg.main}.min.js`,
        format: 'iife',
        name: 'version',
        plugins: [terser()],
      },
    ],
  },
]
