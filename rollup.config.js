import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [{
  input: 'src/index.js',
  output: [{ 
    file: 'dist/app.esm.js', 
    format: 'esm' 
  }],
  plugins: [
    nodeResolve(),
    commonjs({ include: ['node_modules/**'] }),
    terser(),
  ],
}];