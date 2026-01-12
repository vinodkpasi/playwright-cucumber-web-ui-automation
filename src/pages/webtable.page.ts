import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class WebTablePage extends BasePage {
  readonly page: Page;
  firstName: Locator;
  lastName: Locator;
  email: Locator;
  age: Locator;
  salary: Locator;
  department: Locator;
  submitButton: Locator;
  addNewRecordButton: Locator;
  constructor(page: Page) {
    super(page);

    this.page = page;
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.email = page.locator("#userEmail");
    this.age = page.locator("#age");
    this.salary = page.locator("#salary");
    this.department = page.locator("#department");
    this.submitButton = page.locator("#submit");
    this.addNewRecordButton = page.locator("#addNewRecordButton");
  }

  async open() {
    await this.page.goto("/webtables");
  }

  async clickAdd() {
    await this.addNewRecordButton.click();
  }

  async fillForm(data: any) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.age.fill(data.age);
    await this.salary.fill(data.salary);
    await this.department.fill(data.department);
  }

  async submit() {
    await this.submitButton.click();
  }

  async isRecordVisible(name: string): Promise<boolean> {
    return this.page.locator(`text=${name}`).isVisible();
  }
}
