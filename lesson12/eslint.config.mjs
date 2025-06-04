import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        languageOptions: {
          ecmaVersion: 2023,
          sourceType: "module",
          globals: {
            ...globals.browser,
            ...globals.node
          }
        },
        rules: {
          indent: ["error", 2, { SwitchCase: 1 }],
          quotes: [
            "warn",
            "double",
            { avoidEscape: true, allowTemplateLiterals: true }
          ],
          "arrow-parens": ["error", "always"]
        }
      }
    

]

);
