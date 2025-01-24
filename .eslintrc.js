module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'off',
    'no-var': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
