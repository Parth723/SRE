import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "constructor-super": "off",
    },
  },
  ...(Array.isArray(js.configs.recommended) ? js.configs.recommended : [js.configs.recommended]),
  ...(Array.isArray(tseslint.configs.recommended) ? tseslint.configs.recommended : [tseslint.configs.recommended]),
];
