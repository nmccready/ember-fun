module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  globals: {
    $: true
  },
  env: {
    browser: true,
    commonjs: true
  },
  rules: {
  }
};
