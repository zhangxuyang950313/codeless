// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint",
    "prettier"
  ],
  extends: [
    "eslint:recommended", //
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
};
