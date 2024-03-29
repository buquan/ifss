module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:compat/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    polyfills: ['fetch', 'promises', 'url'],
  },
  rules: {
    'no-continue': 0,
    'no-control-regex': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [1, { ignore: ['^@/', '^umi/'] }],
    'import/no-extraneous-dependencies': [2, { optionalDependencies: true }],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'generator-star-spacing': [0],
    'consistent-return': [0],
    'global-require': [0],
    'import/prefer-default-export': [0],
    'react/jsx-no-bind': [0],
    'react/jsx-curly-brace-presence': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': [0],
    'no-else-return': [0],
    'no-restricted-syntax': [0],
    'no-use-before-define': [0],
    'no-nested-ternary': [0],
    'arrow-body-style': [0],
    'import/extensions': [0],
    'no-bitwise': [0],
    'no-cond-assign': [0],
    'require-yield': [1],
    'react/no-did-mount-set-state': [0],
    'linebreak-style': [0],
    'react/jsx-indent': ['error', 2],
    'jsx-a11y/label-has-associated-control': [0],
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'prefer-template': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'react/no-danger': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-unused-vars': 1,
    'func-names': 0,
    'object-shorthand': 0,
    'no-param-reassign': 0,
    'no-multiple-empty-lines': 0,
    'prefer-destructuring': 0,
    'react/jsx-key': 1,
    'react/display-name': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/no-unknown-property': 0,
    'react/no-direct-mutation-state': 0,
    'no-self-assign': 0,
    'react/no-deprecated': 1,
    '@typescript-eslint/no-this-alias': 1,
    'no-dupe-class-members': 1,
    '@typescript-eslint/dot-notation': 1,
    'react/require-default-props': 1,
    'react/function-component-definition': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'react/button-has-type': 1,
    'prettier/prettier': 0,
    'react/jsx-props-no-spreading': 1,
    '@typescript-eslint/no-unused-expressions': 1,
    'react/jsx-no-useless-fragment': 1,
    'prefer-object-spread': 1,
    '@typescript-eslint/default-param-last': 1,
    'import/order': 1,
    'import/no-duplicates': 1,
    'react/function-component-definition': 1,
    '@typescript-eslint/naming-convention': 1,
    '@typescript-eslint/no-use-before-define': 1,
    'react/state-in-constructor': 1,
    'react/no-unused-prop-types': 1,
    'react/require-default-props': 1,
    'react/sort-comp': 1,
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/no-dupe-class-members': 1,
    '@typescript-eslint/lines-between-class-members': 1,
    '@typescript-eslint/no-useless-constructor': 1,
    '@typescript-eslint/no-loop-func': 1,
    'react/static-property-placement': 1,
    'no-restricted-globals': 1,
    'react/jsx-fragments': 1,
    'compat/compat': 1,
    'max-classes-per-file': 1,
    'import/newline-after-import': 1,
    'no-restricted-properties': 0,
    'class-methods-use-this': 1,
    'no-underscore-dangle': 1,
    'prefer-const': 1,
    'react/no-unused-state': 1,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    BMapGL: true,
    BMapGLLib: true,
    UMI_ENV: true,
    CURRENT_SYSTEM: true,
    PUBLIC_RESOURCE: true,
    PUBLIC_RESOURCE_NOSLASH: true,
    c: true,
    portalurl: true,
    LOGIN_VERIFY: true,
    DEVICE_VERIFY: true,
    DUAL_LOGIN: true,
    CLOSE_LOGIN_PAGE: true
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
    project: './tsconfig.json',
  },
};
