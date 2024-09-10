import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
];
