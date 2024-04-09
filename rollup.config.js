import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import analyze from 'rollup-plugin-analyzer';

export default [{
  input: 'src/index.js',
  output: [
    { 
      file: 'dist/app.esm.js', 
      format: 'esm' 
    },
    {
      file: 'dist/app.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs({ include: ['node_modules/**'] }),
    terser(),
    analyze(),
  ],
}];