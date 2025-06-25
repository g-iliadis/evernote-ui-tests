import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/login/login';
import { faker } from '@faker-js/faker';
import { testConfig } from '../support/env';

When('the user logs in with invalid credentials', async function (this: CustomWorld) {
  const loginPage = this.use(LoginPage);
  const username = faker.person.firstName();
  const password = faker.internet.password();
  await loginPage.login(username, password);
});

Then('the login will fail with invalid password error', async function (this: CustomWorld) {
  const loginPage = this.use(LoginPage);
  await loginPage.expectInvalidPasswordError();
});

When('the user logs in with valid credentials', async function (this: CustomWorld) {
  const loginPage = this.use(LoginPage);
  const username = testConfig.credentials.email;
  const password = testConfig.credentials.password;
  await loginPage.login(username, password);
});