module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": 0,
    "no-unused-vars": 0,
    quotes: ["error", "double"],
  },
};
