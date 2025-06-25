import { expect, Page } from '@playwright/test';
import { LandingLocators } from './landingLocators';

export class LandingPage {
  private page: Page;
  private locators: LandingLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LandingLocators(page);
  }

  async navigateToLandingPage(): Promise<void> {
    await this.page.goto('/');
  }

  async expectLandingVisible(): Promise<void> {
    await expect(this.locators.heading).toBeVisible();
    await expect(this.locators.getEvernoteFreeButton).toBeVisible();
    await expect(this.locators.loginLink).toBeVisible();
  }

  async acceptCookies(): Promise<void> {
      await this.locators.acceptCookiesButton.click();
  }
}
