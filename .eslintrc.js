const { inc } = require("semver");

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  includes: [
    "*.js",
    "*.jsx"
  ],
  excludes: [
    "node_modules"
  ]
}
