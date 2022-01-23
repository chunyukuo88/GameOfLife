module.exports = {
  collectCoverageFrom: [
    "./src/lib/**/*.svelte",
    "./src/lib/**/*.ts",
    "./src/lib/**/**/*.svelte",
    "./src/lib/**/**/*.ts",
    "!./src/lib/__Template__/**",
    "!./src/lib/GamePanel/components/SearchBar/*.svelte",
    "!./src/lib/GamePanel/components/SearchBar/*.ts"
  ],
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
