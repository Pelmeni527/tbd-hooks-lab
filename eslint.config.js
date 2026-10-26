import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node },
    },
    rules: {
      eqeqeq: "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-unused-vars": "error",
      complexity: ["error", 8],
      "max-lines-per-function": [
        "warn",
        { max: 40, skipBlankLines: true, skipComments: true },
      ],
      "max-depth": ["warn", 3],
      "no-magic-numbers": [
        "warn",
        { ignore: [0, 1, -1, 2], ignoreArrayIndexes: true },
      ],
      curly: ["error", "all"],
    },
  },
  {
    ignores: ["node_modules/", "coverage/"],
  },
];
