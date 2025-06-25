import { Page } from '@playwright/test';
import { MenuLocators } from './menuLocators';

export class MenuPage {
  readonly locators: MenuLocators;

  constructor(page: Page) {
    this.locators = new MenuLocators(page);
  }

  async clickLogin(): Promise<void> {
    await this.locators.loginButton.click();
  }

  async clickDownload(): Promise<void> {
    await this.locators.downloadButton.click();
  }

  async clickStartForFree(): Promise<void> {
    await this.locators.startForFreeButton.click();
  }
}
