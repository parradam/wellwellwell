module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [{ files: ['*.js'], parserOptions: {} }],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {},
};
