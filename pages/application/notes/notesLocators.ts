import { Page, Locator, FrameLocator } from "@playwright/test";

export class NotesLocators {
  readonly newNoteButton: Locator;
  readonly noteWindow: Locator;
  readonly noteTitle: Locator;
  readonly noteEditorFrame: FrameLocator;
  readonly noteEditorBody: Locator;
  readonly noteSidebarNoteTitle: Locator;

  constructor(page: Page) {
    this.newNoteButton = page.locator("#qa-ALL_NOTES_EMPTY_LINK");
    this.noteWindow = page.locator("#qa-NOTE_DETAIL");
    this.noteTitle = page.locator("#qa-NOTE_TITLE_BREADCRUMB_BTN span");
    this.noteEditorFrame = page.frameLocator("#qa-COMMON_EDITOR_IFRAME");
    this.noteEditorBody = this.noteEditorFrame.locator("html > body");
    this.noteSidebarNoteTitle = page.locator('[id*="qa-NOTES_SIDEBAR_NOTE_TITLE"] span');
  }
}
