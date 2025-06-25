import { Then, When } from "@cucumber/cucumber";
import { fixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";
import timeouts from "../timeouts";

Then(/^The button "([^"]*)" should be disabled$/, async (buttonText: string) => {
  await expect(fixture.page.getByRole("button", { name: buttonText })).toBeDisabled();
});

Then(/^The button "([^"]*)" should be enabled$/, async (buttonText: string) => {
  await expect(fixture.page.getByRole("button", { name: buttonText })).toBeEnabled();
});

When(/^The user clicks on the "([^"]*)" button$/, async (buttonText: string) => {
  await fixture.page.getByRole("button", { name: buttonText }).click();
});

Then(/^An error message "([^"]*)" should be displayed$/, async (message) => {
  await expect(fixture.loginPage.getErrorMessage(message)).toBeVisible({ timeout: timeouts.EXPECT });
});

Then(/^The validation error message "([^"]*)" should be displayed$/, async (message) => {
  await expect(fixture.loginPage.getValidationErrorMessage(message)).toBeVisible({ timeout: timeouts.EXPECT });
});

Then(/^The user presses the "([^"]*)" button$/, async (key) => {
  await fixture.page.keyboard.press(key);
});
