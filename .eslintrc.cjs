// @ts-check

/* eslint-env node */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
