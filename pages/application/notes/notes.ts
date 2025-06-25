import { NotesLocators } from './notesLocators';

export class Notes {
  readonly locators: NotesLocators;

  constructor(private page: any) {
    this.locators = new NotesLocators(page);
  }

  async createNote(title: string, body: string) {
    await this.locators.newNoteButton.click();
    await this.page.waitForSelector(this.locators.noteWindow);
    await this.locators.noteTitle.click();
    await this.locators.noteTitle.fill(title);
    await this.locators.noteEditorBody.click();
    await this.locators.noteEditorBody.fill(body);
  }
}