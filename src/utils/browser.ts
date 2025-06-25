import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";
import timeouts from "../timeouts";

const options: LaunchOptions = {
  headless: process.env.HEADLESS != null ? process.env.HEADLESS.toLowerCase() === "true" : false,
  args: ["--start-maximized"],
  slowMo: timeouts.SLOWMOTION,
};
export const invokeBrowser = () => {
  const browserType = process.env.BROWSER || "chrome";
  switch (browserType.toLowerCase()) {
    case "chrome":
      return chromium.launch(options);
    case "firefox":
      return firefox.launch(options);
    case "webkit":
      return webkit.launch(options);
    default:
      throw new Error("Please set the proper browser!");
  }
};
