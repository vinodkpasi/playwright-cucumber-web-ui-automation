import { Then, When } from "@cucumber/cucumber";
import { fixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";

Then(
  /^The button "([^"]*)" should be disabled$/,
  async (buttonText: string) => {
    await expect(
      fixture.page.getByRole("button", { name: buttonText }),
    ).toBeDisabled();
  },
);

Then(/^The button "([^"]*)" should be enabled$/, async (buttonText: string) => {
  await expect(
    fixture.page.getByRole("button", { name: buttonText }),
  ).toBeEnabled();
});

When(
  /^The user clicks on the "([^"]*)" button$/,
  async (buttonText: string) => {
    await fixture.page.getByRole("button", { name: buttonText }).click();
  },
);

Then(/^The user presses the "([^"]*)" button$/, async (key) => {
  await fixture.page.keyboard.press(key);
});
