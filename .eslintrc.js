module.exports = {
  extends: ['@rnat/eslint-config/typescript'],
  ignorePatterns: ['**/*.spec.*', '**/*.test.*'],
  // rules: {
  //   '@typescript-eslint/no-non-null-assertion': 'off',
  //   '@typescript-eslint/no-use-before-define': 'off',
  //   '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  //   '@typescript-eslint/camelcase': 'off',
  //   '@typescript-eslint/explicit-function-return-type': 'off',
  //   '@typescript-eslint/no-explicit-any': 'off',
  // },
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
