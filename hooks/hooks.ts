import { Before, After } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

Before<CustomWorld>(async function () {
  await this.init();
});

After<CustomWorld>(async function () {
  await this.close();
});