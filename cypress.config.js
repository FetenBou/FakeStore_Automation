const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://fakestoreapi.com",
    requestTimeout: 30000,
    responseTimeout: 80000,
    testIsolation: true,
    trashAssetsBeforeRuns: true,
    defaultCommandTimeout: 5000
  },
});
