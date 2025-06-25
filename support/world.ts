import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";
import config from "../playwright.config";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  private _objects: Record<string, any> = {};

  async init() {
    this.browser = await chromium.launch({
      headless: config.use?.headless,
      timeout: 30000,
    });

    this.context = await this.browser.newContext({
      viewport: config.use?.viewport,
      ignoreHTTPSErrors: config.use?.ignoreHTTPSErrors,
      baseURL: config.use?.baseURL,
    });

    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(20000);
  }

  async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }

  use<T>(Cls: { new (page: Page): T }): T {
    const name = Cls.name;
    if (!this._objects[name]) {
      this._objects[name] = new Cls(this.page);
    }
    return this._objects[name];
  }
}

setWorldConstructor(CustomWorld);
