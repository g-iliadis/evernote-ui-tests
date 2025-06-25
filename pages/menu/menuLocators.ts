import { Page, Locator } from '@playwright/test';

export class MenuLocators {
  readonly loginButton: Locator;
  readonly downloadButton: Locator;
  readonly startForFreeButton: Locator;

  constructor(page: Page) {
    this.loginButton       = page.locator('nav a', { hasText: 'Log in' }).first();
    this.downloadButton    = page.getByRole('link',   { name: 'Download' });
    this.startForFreeButton = page.getByRole('button', { name: 'Start for free' });
  }
}
