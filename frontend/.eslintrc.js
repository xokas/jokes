module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "warn",
    "prefer-const": "error",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-undef": "error",
    "eqeqeq": ["error", "always"],
    "curly": "error",
    "indent": ["error", 2],
    "quotes": ["error", "double", { "avoidEscape": true }],
    "max-len": ["warn", { "code": 100 }]
  },
};
  