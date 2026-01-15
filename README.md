# Playwright BDD Automation Framework

This repository contains a **Playwright + BDD (Cucumber) + TypeScript** based test automation framework.  
The framework follows **Page Object Model (POM)**, and is designed for **scalability, maintainability, and CI/CD readiness**.

---

## 🚀 Tech Stack

- **Playwright** – UI automation
- **BDD (Cucumber)** – Gherkin-based test scenarios
- **TypeScript** – Strongly typed language support
- **Node.js / npm** – Dependency management
- **Husky** – Git hooks for code quality
- **HTML / JSON Reports** – Execution reporting

---

## 📁 Project Structure

```
project/
│── .husky/                 # Git hooks
│── src/
│   │── features/           # Gherkin feature files
│   │── hooks/              # Before / After hooks
│   │── pages/              # Page Object Model
│   │── step_definitions/   # Step definitions (glue code)
│   │── utils/              # Reusable utilities
│   │── timeouts.ts         # Centralized timeouts
│── test-results            # Test execution reports
│── .gitignore              # Files/Folders ignored by Git
│── app.env                 # Application environment details
│── cucumber.json           # BDD runner configuration
│── package.json            # Project dependencies & scripts
│── README.md               # Project documentation
│── tsconfig.json           # TypeScript configuration
```

---

## 🧩 Folder Details

### `.husky/`

```
.husky/
│── pre-commit
│── pre-push
│── commit-msg
```

- Git hooks for code quality
- Runs checks before commit/push (lint, tests, formatting, etc.)

---

### `Configuration Files`

| File            | Purpose                            |
| --------------- | ---------------------------------- |
| `package.json`  | Project dependencies & npm scripts |
| `tsconfig.json` | TypeScript configuration           |
| `timeouts.ts`   | Centralized timeouts               |
| `cucumber.json` | BDD runner configuration           |
| `.gitignore`    | Files ignored by Git               |

---

### `src/`

```
src/
│── features/
│── hooks/
│── pages/
│── step_definitions/
│── utils/
│── timeouts.ts
```

This is where **all automation logic lives**.

---

### `src/features/`

```
features/
│── login.feature
│── webtable.feature

```

- Contains **Gherkin (.feature)** files
- Business-readable test scenarios

Example:

```gherkin
  Scenario: Login fails with invalid credentials
    When I login with username "wronguser" and password "wrongpass"
    Then I should see login error message "Invalid username or password!"
```

---

### `src/hooks/`

```
hooks/
│── hooks.ts
│── pageFixture.ts
```

- Before / After hooks
- Browser, context, page lifecycle
- Shared Playwright objects across steps

Example:

- Launch browser before scenario
- Close browser after scenario

---

### `src/pages/`

```
pages/
│── base.page.ts
│── index.ts
│── login.page.ts
│── webtable.page.ts
```

- Encapsulates UI locators and actions
- Implements **Page Object Model (POM)**
- Encapsulates locators and UI actions

| File               | Responsibility                     |
| ------------------ | ---------------------------------- |
| `base.page.ts`     | Common actions (click, type, wait) |
| `index.ts`         | Central export for pages           |
| `login.page.ts`    | Login-specific actions             |
| `webtable.page.ts` | Webtable-specific actions          |

---

### `src/step_definitions/`

```
step_definitions/
│── common.steps.ts
│── index.ts
│── login.steps.ts
│── webtable.steps.ts
```

- Glue between feature files and page objects
- Implements Gherkin steps

Example:

```ts
Given("I open the DemoQA Login page", async function () {
  await fixture.loginPage.open();
  await expect(fixture.loginPage.username).toBeVisible({
    timeout: timeouts.EXPECT,
  });
  fixture.logger.info("User has navigated to the login page");
});
```

---

### `src/utils/`

Reusable helper utilities such as:

- Browser initialization
- Logging
- Reporting helpers

| File         | Use                    |
| ------------ | ---------------------- |
| `browser.ts` | Browser initialization |
| `init.ts`    | Framework bootstrap    |
| `logger.ts`  | Logging                |
| `report.ts`  | Test reporting         |

---

### `src/timeouts.ts`

Reusable helper utilities such as:

- Centralized timeout values
- Avoids hardcoded waits

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone <repository-url>
cd folderName
```

2. Install Node.js from below URL

```bash
https://nodejs.org/en/download

```

3. Install dependencies

```bash
npm install
```

4. Install Playwright browsers

```bash
npx playwright install
```

---

## Application Environment and Credentials

- Because of security reason email credentials are not present inside any file. You need to set it using environment variables.
- Open the command prompt in the root directory.
- Run the **SET BASEURL=BASEURL** command to set the application url.
- Run the **SET USERNAME=USERNAME** command to set the username.
- Run the **SET PASSWORD=PASSWORD** command to set the password.
- Run the **SET BROWSER=chrome|firefox|webkit** command to set the browser. Default is chrome.
- Run the **SET HEADLESS=true|false** command to set the browser headless mode. Default is false.
- Run the **SET REPORT_OVERWRITE=true|false** command to overwrite/preserve the report. Default is true.
- You can also set all above keys using **app.env** file located in the root  
  directory.

---

## ▶️ Running Tests

### Run all tests
```bash
npm run execute
```

### Run tests with tags
```bash
npm run execute -- --tags "@positive"
```

### Run all failed tests
```bash
npm run execute:failed
```

---

## 📊 Reports & Logs

- Multiple Cucumber Html Report is integrated.
- After execution, report file **index.html** is created under **test-results\reports** directory.
- Screenshot and video will be attached for failed scenarios.
- Logs files are available under **test-results\logs** directory.
- Video files are available under **test-results\videos** directory.

---

## 🔁 Retry & Flaky Test Handling

### Retry for failed scenarios

- By defaut, failed scenarios will run again.
- You can configure the retry behavior for scenarios using **retry** attribute of **cucumber.json** file located under the root directory.

### Retry for failed tests

- Run the **npm run execute:failed** command to execute the failed test cases.
- You can configure the retry behavior using **rerun** attribute of **cucumber.json** file located under the root directory.

---

## Parallel execution

- By default, 3 scenarios will be executed in the serial mode.
- To run the scenarios in the parallel mode you can set the count using the **default-->parallel** attribute of **cucumber.json** file located under the root directory.
- You can set **parallel:1** for serial execution.

---

## 🧪 Best Practices Followed

- Page Object Model (POM)
- BDD for readability
- Centralized configuration & timeouts
- Reusable utilities
- Clean separation of concerns

---

## 👤 Author

**Your Name**

---

## 📄 License

This project is licensed for internal and educational use.
