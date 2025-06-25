import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { MenuPage } from '../pages/menu/menu';


Then('user opens login page', async function (this: CustomWorld) {
  const menuPage = this.use(MenuPage);
  await menuPage.clickLogin();
});
