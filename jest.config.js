// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');

module.exports = {
  bail: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  roots: ['src'],
  testMatch: ['<rootDir>/src/**/?(*.)spec.{ts,tsx}'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/index.ts', '!<rootDir>/src/**/node_modules/'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'json', 'json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    'ts-jest': {
      babel: false,
      tsConfig: './tsconfig.json'
    }
  }
};
