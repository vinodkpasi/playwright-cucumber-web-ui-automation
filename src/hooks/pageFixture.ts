/* eslint-disable @typescript-eslint/ban-ts-comment */
import { BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../pages";
export const fixture = {
  // @ts-ignore
  page: undefined as Page,

  // @ts-ignore
  context: undefined as BrowserContext,

  // @ts-ignore
  logger: undefined as Logger,

  // @ts-ignore
  loginPage: undefined as LoginPage,
};
