module.exports = {
  "extends": "airbnb-base",
  'plugins': [
    'import',
    'react',
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  'env': {
    'browser': true,
  },
  'parser': 'babel-eslint',
  'rules': {
    'no-unused-vars': [2, { 'varsIgnorePattern': 'h' }],
    'react/jsx-uses-vars': 2,
    'react/jsx-indent': [2, 2],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-restricted-globals': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
  },
};