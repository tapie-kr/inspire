import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    // Default configuration for TypeScript
    files: ['**/*.{jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'enumMember', format: ['UPPER_CASE'], leadingUnderscore: 'allow' },
      ],

      'comma-dangle': ['error', 'always-multiline'],

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-duplicate-imports': 'error',
      'no-undef': 'off',
      'no-redeclare': 'off',

      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-pascal-case': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-handler-names': [
        'error',
        {
          eventHandlerPrefix: 'handle',
          eventHandlerPropPrefix: 'on',
          checkLocalVariables: true,
          checkInlineFunction: true,
        },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/boolean-prop-naming': [
        'error',
        {
          propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
          rule: '^(disabled)$|(is|has|can|should|will|default)[A-Z]([A-Za-z0-9]?)+',
        },
      ],
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens',
          assignment: 'parens',
          return: 'parens',
          arrow: 'parens',
          condition: 'parens',
          logical: 'parens',
          prop: 'parens',
        },
      ],
      'react/jsx-fragments': ['error', 'syntax'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^.+\\.css$'],
            ['^@cottons-kr/react-foundation', '^@/components/(?!.*?/shared$)'],
            ['^@?\\w', '^@/', '^\\.'],
            ['^\\u0000'],
          ],
        },
      ],

      'jsx-a11y/anchor-is-valid': 'error',

      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'directive', next: 'import' },
      ],
    },
  },
  {
    // JavaScript Configuration
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'off',
    },
  },
  {
    // Script Configuration
    files: ['**/scripts/**/*.{js,mjs,cjs,ts}'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',

      'no-console': 'off',
    },
  },
  {
    // Storybook Configuration
    files: ['**/.storybook/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',

      'no-console': 'off',
    },
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
];
