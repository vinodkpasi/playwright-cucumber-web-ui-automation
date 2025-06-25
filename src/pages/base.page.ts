import { type Locator, type Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly menuOption: Locator;
  readonly errorMessage: Locator;
  readonly validationErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuOption = page.locator("li[role='menuitem']");
    this.errorMessage = page.locator(".MuiAlert-message");
    this.validationErrorMessage = page.locator(".Mui-error");
  }

  selectMenuOption(menu: string) {
    this.menuOption.getByText(menu).click();
  }

  getErrorMessage(message: string) {
    return this.errorMessage.getByText(message);
  }

  getValidationErrorMessage(message: string) {
    return this.validationErrorMessage.getByText(message);
  }
}
