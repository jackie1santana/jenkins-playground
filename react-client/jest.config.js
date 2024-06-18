// jest.config.js
module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: [
      "/node_modules/",
      "/angular-client/"  // Ignore all tests in the angular-client directory
    ]
  };
  