import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on);
    },
  },
});
