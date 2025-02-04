// @ts-check

/* eslint-env node */

import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  typescriptEslint.configs.strictTypeChecked,
  typescriptEslint.configs.stylistic,
  prettierConfig,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ['.astro/', 'dist/'],
  },
);
