import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "tests/e2e",
  timeout: 30_000,
  retries: 0,
  use: {
    headless: true,
    baseURL: "http://127.0.0.1:5173"
  },
  webServer: {
    command: "npm run dev",
    port: 5173,
    reuseExistingServer: true
  }
};

export default config;

