// eslint.config.mjs
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
      // TypeScript 관련 규칙
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

      'comma-dangle': ['error', 'always-multiline'],

      // 에러 방지 규칙
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-duplicate-imports': 'error',
      'no-undef': 'off',
      'no-redeclare': 'off',

      // React 관련 규칙
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
          rule: '^(is|has|can|should|will)[A-Z]([A-Za-z0-9]?)+',
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
            // 1. CSS 모듈
            ['^.+\\.css$'],

            // 2. 컴포넌트 (shared로 끝나지 않는 것들만)
            [
              '^@cottons-kr/react-foundation',
              '^@/components/(?!.*?/shared$)', // /shared로 끝나지 않는 컴포넌트 경로만
            ],

            // 3. 나머지 imports (/shared 포함)
            ['^@?\\w', '^@/', '^\\.'],

            // Side effect imports
            ['^\\u0000'],
          ],
        },
      ],

      // 접근성 규칙
      'jsx-a11y/anchor-is-valid': 'error',
    },
  },
  {
    // JavaScript Configuration
    files: ['**/*.{js,mjs,cjs,jsx}'],
    rules: {
      'no-unused-vars': 'error',
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
