module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ["eslint:recommended", "@antfu", "plugin:astro/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
  rules: {
    "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "@typescript-eslint/quotes": ["error", "double"],
  },
}
