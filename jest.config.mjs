// jest.config.mjs
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // ADICIONE OU MODIFIQUE ESTA SEÇÃO:
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/', // Sempre bom ignorar node_modules
    '<rootDir>/.next/',       // E a pasta de build do Next.js
    '<rootDir>/tests/',       // Ignora a pasta de testes do Playwright
    '<rootDir>/tests-examples/', // Ignora a pasta de exemplos de testes do Playwright
  ],
};

export default createJestConfig(customJestConfig);