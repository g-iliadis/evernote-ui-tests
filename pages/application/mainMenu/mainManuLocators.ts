import { Locator, Page } from "@playwright/test";

export class MainMenuLocators {
  private readonly page: Page;
  readonly navRoot: Locator;
  readonly userPortrait: Locator;
  readonly userInfoContainer: Locator;

  readonly homeButton: Locator;
  readonly notesButton: Locator;
  readonly tasksButton: Locator;
  readonly filesButton: Locator;
  readonly calendarButton: Locator;
  readonly templatesButton: Locator;
  readonly notebooksButton: Locator;
  readonly userAvatar: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navRoot = page.locator('[aria-label="Main"]');
    this.userPortrait = page.locator("#qa-USER_PORTRAIT");
    this.userInfoContainer = page.locator("#qa-NAV_USER");
    this.homeButton = page.locator("#qa-NAV_HOME");
    this.notesButton = page.locator("#qa-NAV_ALL_NOTES");
    this.tasksButton = page.locator("#qa-NAV_TASK_KINGDOM");
    this.filesButton = page.locator("#qa-NAV_FILES");
    this.calendarButton = page.locator("#qa-NAV_CALENDAR");
    this.templatesButton = page.locator("#qa-NAV_ALL_TEMPLATES");
    this.notebooksButton = page.locator("#qa-NAV_ALL_NOTEBOOKS");
    this.userAvatar = page.locator("#qa-USER_PORTRAIT");
    this.logoutLink = page.locator("#qa-ACCOUNT_DROPDOWN_LOGOUT");
  }

  getUserNameLocator(username: string): Locator {
    return this.page.getByText(username, { exact: true });
  }
}
