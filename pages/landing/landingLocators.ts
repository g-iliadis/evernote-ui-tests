import { Page, Locator } from "@playwright/test";

export class LandingLocators {
  readonly heading: Locator;
  readonly getEvernoteFreeButton: Locator;
  readonly loginLink: Locator;
  readonly acceptCookiesButton: Locator;

  constructor(page: Page) {
    this.heading = page.locator("h1", { hasText: "What will you" });
    this.getEvernoteFreeButton = page.getByRole("button", {
      name: "Get Evernote free",
    });
    this.loginLink = page.getByRole("link", {
      name: "Already have an account? Log in",
    });
    this.acceptCookiesButton = page.getByRole("button", {
      name: "Accept all cookies",
      exact: true,
    });
  }
}
