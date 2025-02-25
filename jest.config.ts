import type { Config } from "jest";

const config: Config = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/test/jestSetup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/src/test"],
  testTimeout: 15000,
  transformIgnorePatterns: [
    "node_modules/(?!(expo-modules-core|expo|react-native|@react-native|@expo|react-native-safe-area-context)/)",
  ],
};

export default config;
