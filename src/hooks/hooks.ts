import dotenv from "dotenv";
import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../utils/browser";
import fs from "fs-extra";
import { createLogger } from "winston";
import { getLoggerOptions } from "../utils/logger";
import { LoginPage } from "../pages";

import timeouts from "../timeouts";
let browser: Browser;
let context: BrowserContext;
dotenv.config({ path: "app.env" });

BeforeAll(async function () {
  browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
  const scenarioName = pickle.name + pickle.id;
  context = await browser.newContext({
    viewport: null,
    baseURL: process.env.BASEURL,
    recordVideo: {
      dir: "test-results/videos",
    },
  });
  await context.tracing.start({
    name: scenarioName,
    title: pickle.name,
    sources: true,
    screenshots: true,
    snapshots: true,
  });
  context.setDefaultNavigationTimeout(timeouts.NAVIGATION);
  const page = await context.newPage();
  fixture.page = page;
  fixture.context = context;
  fixture.logger = createLogger(getLoggerOptions(pickle.name));
  fixture.loginPage = new LoginPage(page);
});

After(async function ({ pickle, result }) {
  let videoPath: string;
  let img: Buffer;
  if (result?.status == Status.FAILED) {
    img = await fixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
    videoPath = await fixture.page.video().path();
  }
  await fixture.page.close();
  await context.close();
  if (result?.status == Status.FAILED) {
    this.attach(img, "image/png");
    this.attach(fs.readFileSync(videoPath), "video/webm");
  }
});

AfterAll(async function () {
  await browser.close();
});
