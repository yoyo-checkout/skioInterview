module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': 0,
    curly: 0,
    semi: 0,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': 0,
    'no-console': 0
  }
}
