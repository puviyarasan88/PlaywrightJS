// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  use: {
    browserName: "firefox",
    headless: false,
  },
  reporter: [["html", { open: "always" }]],
});
