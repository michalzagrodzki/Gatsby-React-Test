// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "eslint:recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "eol-last": 1,
    "max-len": 1,
    curly: 1,
    "no-empty-function": 1,
    "no-else-return": 1,
    "no-use-before-define": 1,
    "array-bracket-spacing": [1, "never"],
    "block-spacing": 1,
    camelcase: 1,
    indent: [1, 2],
    "jsx-quotes": [1, "prefer-double"],
    "keyword-spacing": ["error", { before: true, after: true }],
    "max-lines": [1, { max: 150, skipBlankLines: true, skipComments: true }],
    "max-lines-per-function": ["error", { max: 40, skipComments: true }],
    "no-inline-comments": 1,
    "no-multiple-empty-lines": 1,
    "no-trailing-spaces": 1,
    "no-whitespace-before-property": 1,
    "object-curly-spacing": [1, "always"],
  },
};
