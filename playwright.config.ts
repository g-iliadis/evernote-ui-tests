import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://evernote.com/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 20000,
    navigationTimeout: 20000,
  },
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
});
