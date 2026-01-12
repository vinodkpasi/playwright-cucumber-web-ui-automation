import { Given, When, Then } from "@cucumber/cucumber";
import dotenv from "dotenv";
import { fixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";
import timeouts from "../timeouts";
dotenv.config({ path: "app.env" });

Given("I open the DemoQA Login page", async function () {
  await fixture.loginPage.open();
  await expect(fixture.loginPage.username).toBeVisible({
    timeout: timeouts.EXPECT,
  });
  fixture.logger.info("User has navigated to the login page");
});

When(
  "I login with username {string} and password {string}",
  async function (username: string, password: string) {
    await fixture.loginPage.login(username, password);
  },
);

Then("I should be logged in successfully", async function () {
  const result = await fixture.loginPage.isLoginSuccessful();
  expect(result).toBeTruthy();
  fixture.logger.info("User has logged-in to the application successfully");
});

Then(
  "I should see login error message {string}",
  async function (message: string) {
    const error = await fixture.loginPage.getErrorMessage();
    expect(error).toContain(message);
    fixture.logger.info("User has not logged-in to the application");
  },
);
