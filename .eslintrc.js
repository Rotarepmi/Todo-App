var path = require('path');

module.exports = {
  extends: 'react-app',
  rules: {
    'react/boolean-prop-naming': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/display-name': 'error',
    'react/no-array-index-key': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-typos': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-state': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/require-default-props': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': [
      'error',
      {
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-key': 'error',
    'react/forbid-prop-types': [
      'error',
      {
        checkContextTypes: false,
        checkChildContextTypes: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
};
