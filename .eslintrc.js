module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'unused-imports',
    'eslint-plugin-react'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': 'error', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-vars': 'error',
    'react/jsx-uses-react': 0,
    'react/js-uses-react': 0,
    'react/jsx-uses-vars': 0,
    'react/js-uses-vars': 0,
  }
}
