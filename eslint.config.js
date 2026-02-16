// eslint.config.js
export default [
  {
    languageOptions: {
      globals: {
        // Define global variables from "env" here
        console: "readonly",
        process: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
    ignores: ["node_modules/**"],
  },
];
