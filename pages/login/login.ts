import { expect, Page } from '@playwright/test';
import { LoginLocators } from './loginLocators';

export class LoginPage {
  readonly locators: LoginLocators;

  constructor(page: Page) {
    this.locators = new LoginLocators(page);
  }

  async fillUsername(username: string): Promise<void> {
    await this.locators.usernameInput.fill(username);
    await this.locators.continueButton.click();
  }

  async fillPassword(password: string): Promise<void> {
    await this.locators.passwordInput.waitFor({ state: 'visible' });
    await this.locators.passwordInput.fill(password);
    await this.locators.continueButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }

  async expectInvalidPasswordError(): Promise<void> {
    await expect(this.locators.errorMessage).toBeVisible();
    await expect(this.locators.errorMessage).toHaveText(
      'Please verify your credentials. The password entered is incorrect.'
    );
  }
}
