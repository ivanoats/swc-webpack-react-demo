module.exports = {
  extends: ["plugin:react/recommended", "prettier", "prettier/react"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ["react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    semi: ["error", "never"]
  }
}
