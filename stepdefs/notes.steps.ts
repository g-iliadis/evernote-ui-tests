import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { Notes } from '../pages/application/notes/notes';
import { faker } from '@faker-js/faker';

Then('create a random note', async function (this: CustomWorld) {
  const notes = this.use(Notes);
  await notes.createNote(faker.person.firstName(), faker.lorem.paragraphs(1));
});
