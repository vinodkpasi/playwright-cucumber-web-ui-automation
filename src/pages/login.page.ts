import { type Locator, type Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly page: Page;
  username: Locator;
  password: Locator;
  loginBtn: Locator;
  errorMsg: Locator;
  profileHeader: Locator;

  constructor(page: Page) {
    super(page);

    this.page = page;
    this.username = page.locator("#userName");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login");
    this.errorMsg = page.locator("#name");
    this.profileHeader = page.locator("text=Profile");
  }

  async open() {
    await this.page.goto("/login");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async isLoginSuccessful(): Promise<boolean> {
    return this.profileHeader.isVisible();
  }

  async getErrorMessage(): Promise<string> {
    return (await this.errorMsg.textContent()) ?? "";
  }
}
