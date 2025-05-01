// eslint.config.js
import js from "@eslint/js"; // Provides js.configs.recommended
import globals from "globals"; // Provides global definitions like browser globals
import pluginReact from "eslint-plugin-react"; // Provides React-specific rules and settings

// --- No need to import or use defineConfig in flat config ---
// import { defineConfig } from "eslint/config"; // REMOVE THIS LINE

export default [
  // Configuration for JavaScript and JSX files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Apply this config to these files
    languageOptions: {
      // Set the globals available in these files (e.g., browser API)
      globals: {
        ...globals.browser,
        // Add other specific globals if needed, e.g., node: true
      },
      // Specify parser options if necessary, e.g., for newer syntax or JSX
      parserOptions: {
        ecmaVersion: 2020, // Or a newer version like 2022 or latest
        sourceType: "module", // Assuming you are using ES modules
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    // Include recommended rules from @eslint/js
    // This is the equivalent of the old `extends: ["eslint:recommended"]` or `extends: ["js/recommended"]`
    // We merge the rules object provided by js.configs.recommended into our current config object's rules.
    rules: {
      ...js.configs.recommended.rules,

      // Disable prop type validation
      "react/prop-types": "off",

      // Enforce self-closing tags where possible
      "react/self-closing-comp": "warn",
    },
    // If @eslint/js registered a plugin implicitly, it's handled.
    // If you had other JS-specific plugins (not covered by the object), you'd add them here:
    // plugins: { myJsPlugin },
  },

  // Configuration for React-specific rules
  // pluginReact.configs.flat.recommended is already a complete flat config object
  // and should be included directly in the array. It typically includes file patterns,
  // settings (like react version), rules, and parser options for JSX.
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+


  // --- Optional: Add more configurations ---
  // Example: Ignoring files
  // { ignores: ["dist/", "node_modules/"] },

  // Example: Specific rules for test files
  // {
  //   files: ["**/*.test.{js,jsx}"],
  //   languageOptions: {
  //      globals: { ...globals.jest }, // Example: If using Jest
  //   },
  //   rules: {
  //     // Add test-specific rules
  //   }
  // }
];