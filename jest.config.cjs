module.exports = {
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true
    }
  },
  moduleDirectories: ["<rootDir>/node_modules"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },
  preset: "ts-jest/presets/js-with-ts-esm",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true
      }
    ]
  },
  transformIgnorePatterns: ["node_modules/(?!(svelte-routing)/)"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};
