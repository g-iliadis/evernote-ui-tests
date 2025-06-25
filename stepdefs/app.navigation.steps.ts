import { Then } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { MainMenu } from "../pages/application/mainMenu/mainMenu";
import { testConfig } from "../support/env";

Then("navigate to notes section", async function (this: CustomWorld) {
  const menu = this.use(MainMenu);

  await menu.waitForMenuToBeVisible();
  await menu.clickNotes();
});

Then("login redirected user properly to main application", async function (this: CustomWorld) {
  const menu = this.use(MainMenu);
  await menu.validateLoginSuccessful(testConfig.credentials.username);
});

Then("logout from the application", async function (this: CustomWorld) {
  const menu = this.use(MainMenu);
  await menu.logout();
});

