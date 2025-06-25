import { Page, expect } from "@playwright/test";
import { MainMenuLocators } from "./mainManuLocators";

export class MainMenu {
  readonly locators: MainMenuLocators;

  constructor(page: Page) {
    this.locators = new MainMenuLocators(page);
  }

  async waitForMenuToBeVisible() {
    await this.locators.navRoot.waitFor();
  }

  async validateLoginSuccessful(expectedUserName: string) {
    const userLocator = this.locators.getUserNameLocator(expectedUserName);
    await expect(userLocator).toBeVisible({ timeout: 1200000 });
  }

  async clickHome() {
    await this.locators.homeButton.click();
  }

  async clickNotes() {
    await this.locators.notesButton.click();
  }

  async clickTasks() {
    await this.locators.tasksButton.click();
  }

  async clickFiles() {
    await this.locators.filesButton.click();
  }

  async clickCalendar() {
    await this.locators.calendarButton.click();
  }

  async clickTemplates() {
    await this.locators.templatesButton.click();
  }

  async clickNotebooks() {
    await this.locators.notebooksButton.click();
  }

  async logout() {
    await this.locators.userAvatar.click();
    await this.locators.logoutLink.click();
  }
}
