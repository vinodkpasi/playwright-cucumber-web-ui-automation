import { Given, When, Then } from "@cucumber/cucumber";
import dotenv from "dotenv";
import { fixture } from "../hooks/pageFixture";
import { expect } from "@playwright/test";
dotenv.config({ path: "app.env" });

Given("I open the DemoQA Web Tables page", async function () {
  await fixture.webTablePage.open();
});

When("I add a new record with following details", async function (dataTable) {
  for (const record of dataTable.hashes()) {
    await fixture.webTablePage.clickAdd();
    await fixture.webTablePage.fillForm(record);
    await fixture.webTablePage.submit();
  }
});

Then(
  "the record {string} should be displayed in the table",
  async function (name: string) {
    const visible = await fixture.webTablePage.isRecordVisible(name);
    expect(visible).toBeTruthy();
  }
);
