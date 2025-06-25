import { expect, Locator, Page } from '@playwright/test';
import { ErrorsEnum } from './ErrorEnums';

export class CommonErrors {
  private page: Page;
  private errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.errorMessage = page.locator('#error');
  }

  async expectVisibleError(message: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }

  async expectInvalidBirthdateError(): Promise<void> {
    await this.expectVisibleError(ErrorsEnum.INVALID_BIRTHDATE);
  }

  async expectInvalidCredentialsError(): Promise<void> {
    await this.expectVisibleError(ErrorsEnum.INVALID_CREDENTIALS);
  }
}
