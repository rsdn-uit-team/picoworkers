module.exports = {
  extends: ["react-app"],
  rules: {
  },
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {
        "quotes": ["warn", "single"],
        "eqeqeq": ["warn"],
        "block-scoped-var": ["warn"],
        "no-return-await": ["error"]
      },
    },
  ],
};
