const jestConfigTs = {
 testEnvironment: 'jsdom',
 setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
 testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

export default jestConfigTs;
