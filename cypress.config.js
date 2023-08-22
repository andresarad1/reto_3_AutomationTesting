const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.viewportWidth = 1024;   // Ancho en píxeles
      
      return config
    },
  },
});
