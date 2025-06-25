import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LandingPage } from '../pages/landing/landing';

Then('main page loads', async function (this: CustomWorld) {
  const landingPage = this.use(LandingPage);
  
  await landingPage.navigateToLandingPage();
  await landingPage.acceptCookies();
  await landingPage.expectLandingVisible();
});
