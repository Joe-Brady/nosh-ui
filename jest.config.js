module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "src/**/*.ts",
    "!src/assets/**",
    "!**/index.ts",
    "!**/index.tsx",
    "!**/App.tsx",
    "!**/Routes.tsx",
    "!**/theme.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -0
    }
  }
};
