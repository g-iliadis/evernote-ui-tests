import { Locator, Page } from '@playwright/test';

export class LoginLocators {
  readonly usernameInput: Locator;
  readonly continueButton: Locator;
  readonly passwordInput: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.usernameInput = page.locator('#email');
    this.continueButton = page.getByRole('button', { name: 'Continue' }).first();
    this.passwordInput = page.getByPlaceholder('Password');
    this.errorMessage = page.locator('span.text-secondary-red-400', {
      hasText: 'Please verify your credentials',
    });
  }
}
