import { type Locator, type Page, expect } from "@playwright/test";
import timeouts from "../timeouts";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly continueLoginButton: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly userProfileIcon: Locator;
  readonly signoutButton: Locator;

  constructor(page: Page) {
    super(page);

    this.page = page;
    this.emailInput = page.getByPlaceholder("Email Address");
    this.continueLoginButton = page.getByRole("button", { name: "Continue with login" });
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.userProfileIcon = page.locator("header .MuiAvatar-img").last();
    this.signoutButton = page.locator("li[role='menuitem']").getByText("Sign out");
  }

  async goto() {
    await this.page.goto("/login");
    await expect(this.page).toHaveTitle("Login - SkillCycle", { timeout: timeouts.EXPECT });
  }

  async enterEmail(email: string = process.env.EMAIL) {
    await this.emailInput.clear();
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string = process.env.PASSWORD) {
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.loginButton.click();
  }

  async conitnueLogin() {
    await this.continueLoginButton.click();
  }

  async signout() {
    await this.userProfileIcon.click();
    await this.signoutButton.click();
  }
}
