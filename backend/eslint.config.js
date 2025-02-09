const js = require("@eslint/js");
const pluginN = require("eslint-plugin-n");

module.exports = [
  js.configs.recommended,
  pluginN.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        process: "readonly",
        __dirname: "readonly",
        module: "readonly",
        require: "readonly"
      }
    },
    rules: {
      "n/no-unpublished-require": ["error", { "allowModules": ["@eslint/js", "eslint-plugin-n"] }],
      "semi": ["error", "always"],
      "prefer-const": "error",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-undef": "error",
      "eqeqeq": ["error", "always"],
      "curly": "error",
      "indent": ["error", 2],
      "quotes": ["error", "double", { "avoidEscape": true }],
      "max-len": ["warn", { "code": 100 }]
    }
  }
];
