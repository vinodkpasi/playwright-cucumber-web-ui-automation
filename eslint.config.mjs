// @ts-nocheck

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ["playwright-report", "node_modules", "test-results", "eslint.config.mjs", ".vscode"],
    rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
  },
  {
    ignores: ["test-results/*", "eslint.config.mjs"],
  }
);
