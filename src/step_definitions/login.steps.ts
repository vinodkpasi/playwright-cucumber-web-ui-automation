import { Given, When, Then } from "@cucumber/cucumber";
import dotenv from "dotenv";
import { fixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";
import timeouts from "../timeouts";
dotenv.config({ path: "app.env" });

Given("The user is on the login page", async function () {
  await fixture.loginPage.goto();
  await expect(fixture.loginPage.emailInput).toBeVisible({ timeout: timeouts.EXPECT });
  fixture.logger.info("User has navigated to the login page");
});

When(/^The user enters the email "([^"]*)"$/, async (email: string) => {
  await fixture.loginPage.enterEmail(email);
  fixture.logger.info("User has entered the email");
});

When(/^The user enters the password "([^"]*)"$/, async (password: string) => {
  await fixture.loginPage.enterPassword(password);
  fixture.logger.info("User has entered the password");
});

When(/^The user leaves email blank$/, async () => {
  await fixture.loginPage.emailInput.clear();
  fixture.logger.info("User has cleared the email");
});

When(/^The user leaves password blank$/, async () => {
  await fixture.loginPage.passwordInput.clear();
  fixture.logger.info("User has cleared the password");
});

Then(/^The user should be logged into to the application$/, async () => {
  await expect(fixture.loginPage.emailInput).toBeHidden({ timeout: timeouts.EXPECT });
  await expect(fixture.loginPage.userProfileIcon).toBeVisible({ timeout: timeouts.EXPECT });
  fixture.logger.info("User has redirected to the dashboard");
});

Then("The user signs out of the application", async function () {
  await fixture.loginPage.signout();
  await expect(fixture.loginPage.userProfileIcon).toBeHidden({ timeout: timeouts.EXPECT });
  await expect(fixture.loginPage.signoutButton).toBeHidden({ timeout: timeouts.EXPECT });
  fixture.logger.info("User has successfully sign out of the application");
});
