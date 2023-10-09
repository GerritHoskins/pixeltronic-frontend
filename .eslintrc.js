module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules', 'dist', 'public', 'public/FaceTecSDK.js', 'nightwatch'],
  rules: {},
};
