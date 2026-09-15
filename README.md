# Playwright Cucumber Web UI Automation

![Playwright](https://img.shields.io/badge/Playwright-1.53+-45ba4b?logo=playwright&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-11.x-23d96c?logo=cucumber&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.x-F7B93E?logo=prettier&logoColor=black)

A scalable **Web UI Test Automation Framework** built with **Playwright, Cucumber BDD, TypeScript, and Page Object Model (POM)**.

The framework is designed for maintainability, reusability, parallel execution, retry/rerun support, centralized configuration, logging, reporting, and CI/CD readiness.

## 🚀 Overview

This project demonstrates a production-style BDD automation framework using:

- **Playwright** for browser automation
- **Cucumber.js** for BDD and Gherkin scenarios
- **TypeScript** for strongly typed automation code
- **Page Object Model (POM)** for maintainable UI interactions
- **Cucumber Hooks** for browser/scenario lifecycle management
- **Winston** for structured logging
- **Multiple Cucumber HTML Reporter** for execution reporting
- **Faker.js** for test-data generation
- **ESLint + Prettier** for code quality and formatting
- **Husky** for Git hooks
- **Environment-driven configuration**
- **Scenario retry and failed-scenario rerun support**
- **Parallel scenario execution**

## 🏗️ Framework Architecture

```text
                    ┌──────────────────────────┐
                    │      Gherkin Features    │
                    │     *.feature files      │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │     Step Definitions     │
                    │       *.steps.ts         │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │       Page Objects       │
                    │       *.page.ts          │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │        Playwright        │
                    │ Browser / Context / Page │
                    └──────────────────────────┘

       ┌─────────────────────────────────────────────────┐
       │                    Framework                     │
       │                                                   │
       │ Hooks │ Fixtures │ Utils │ Logger │ Configuration│
       │ Reports │ Retry │ Environment │ Test Data        │
       └─────────────────────────────────────────────────┘
```

### Design Principles

- Separation of concerns
- Single Responsibility Principle
- Reusable Page Objects
- Business-readable BDD scenarios
- Centralized configuration and timeouts
- Reusable utilities
- Minimal duplication
- Environment-driven execution
- Clean reporting and logging

## ✨ Key Features

### Playwright Browser Automation

Supports modern browser automation with:

- Chromium
- Firefox
- WebKit

### Cucumber BDD

Business behavior is expressed using Gherkin.

```gherkin
Feature: Login

  Scenario: Login fails with invalid credentials
    When I login with username "wronguser" and password "wrongpass"
    Then I should see login error message "Invalid username or password!"
```

### Page Object Model

UI interactions are encapsulated in page classes:

```text
src/pages/
├── base.page.ts
├── index.ts
├── login.page.ts
└── webtable.page.ts
```

Benefits:

- Centralized locators
- Reusable actions
- Easier maintenance
- Reduced duplication
- Cleaner step definitions
- Separation of test intent and UI implementation

### Cucumber Hooks

Hooks manage:

- Browser initialization
- Browser context creation
- Page creation
- Scenario setup
- Scenario teardown
- Resource cleanup
- Shared fixtures

### Centralized Timeouts

Timeout values are maintained centrally in:

```text
src/timeouts.ts
```

This avoids scattering hard-coded timeout values throughout the framework.

### Environment-Based Configuration

Application and execution settings can be controlled through environment variables or `app.env`.

| Variable | Description | Example |
|---|---|---|
| `BASEURL` | Application URL | `https://example.com` |
| `USERNAME` | Application username | `testuser` |
| `PASSWORD` | Application password | `********` |
| `BROWSER` | Browser | `chrome` |
| `HEADLESS` | Headless execution | `true` |
| `REPORT_OVERWRITE` | Overwrite report | `true` |

> Never commit real credentials, tokens, or secrets to source control.

## 📁 Project Structure

```text
playwright-cucumber-web-ui-automation/
│
├── .husky/
│   ├── pre-commit
│   ├── pre-push
│   └── commit-msg
│
├── src/
│   ├── features/
│   │   ├── login.feature
│   │   └── webtable.feature
│   │
│   ├── hooks/
│   │   ├── hooks.ts
│   │   └── pageFixture.ts
│   │
│   ├── pages/
│   │   ├── base.page.ts
│   │   ├── index.ts
│   │   ├── login.page.ts
│   │   └── webtable.page.ts
│   │
│   ├── step_definitions/
│   │   ├── common.steps.ts
│   │   ├── index.ts
│   │   ├── login.steps.ts
│   │   └── webtable.steps.ts
│   │
│   ├── utils/
│   │   ├── browser.ts
│   │   ├── init.ts
│   │   ├── logger.ts
│   │   └── report.ts
│   │
│   └── timeouts.ts
│
├── test-results/
├── .gitignore
├── @rerun.txt
├── app.env
├── app.env.sample
├── cucumber.json
├── eslint.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## 🧩 Directory Responsibilities

| Directory / File | Responsibility |
|---|---|
| `src/features` | Gherkin feature files |
| `src/step_definitions` | Step implementation / glue code |
| `src/pages` | Page Object Model |
| `src/hooks` | Browser and scenario lifecycle |
| `src/utils` | Framework utilities |
| `src/timeouts.ts` | Centralized timeout configuration |
| `.husky` | Git hooks |
| `cucumber.json` | Cucumber execution configuration |
| `app.env` | Local environment configuration |
| `app.env.sample` | Environment configuration template |
| `eslint.config.mjs` | ESLint configuration |
| `tsconfig.json` | TypeScript configuration |

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | Browser automation |
| Cucumber.js | BDD test execution |
| TypeScript | Type-safe automation |
| Node.js | Runtime |
| Faker.js | Test-data generation |
| Winston | Logging |
| Multiple Cucumber HTML Reporter | HTML reporting |
| ESLint | Static code analysis |
| Prettier | Code formatting |
| Husky | Git hooks |
| ts-node | TypeScript execution |

## 💻 Prerequisites

Install:

- Node.js LTS
- npm
- Git
- VS Code (recommended)

Verify:

```bash
node --version
npm --version
git --version
```

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/vinodkpasi/playwright-cucumber-web-ui-automation.git
cd playwright-cucumber-web-ui-automation
```

### 2. Install dependencies

Recommended:

```bash
npm ci
```

Or:

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

For Linux environments:

```bash
npx playwright install --with-deps
```

## ⚙️ Environment Configuration

Create a local environment file from the sample:

### Windows CMD

```cmd
copy app.env.sample app.env
```

### PowerShell

```powershell
Copy-Item app.env.sample app.env
```

Update `app.env`:

```env
BASEURL=https://your-application-url
USERNAME=your-username
PASSWORD=your-password
BROWSER=chrome
HEADLESS=true
REPORT_OVERWRITE=true
```

Supported browsers:

```text
chrome
firefox
webkit
```

Example:

```env
BROWSER=firefox
```

For headed execution:

```env
HEADLESS=false
```

## ▶️ Running Tests

### Run the complete test suite

```bash
npm run execute
```

### Run the underlying Cucumber command

```bash
npm test
```

### Run tests by tag

```bash
npm run execute:tag --tags="@positive"
```

Examples:

```bash
npm run execute:tag --tags="@login"
npm run execute:tag --tags="@positive"
```

Tags are useful for:

- Smoke testing
- Regression testing
- Feature-specific execution
- Positive/negative scenarios
- CI/CD pipeline stages

## 🔁 Retry and Failed-Test Rerun

### Scenario retry

Cucumber is configured with a retry value. A failed scenario can therefore be retried automatically.

Configure this behavior in:

```text
cucumber.json
```

### Rerun failed scenarios

Failed scenarios are written to:

```text
@rerun.txt
```

Execute them with:

```bash
npm run test:failed
```

Or execute failed scenarios with report generation:

```bash
npm run execute:failed
```

## ⚡ Parallel Execution

The framework uses Cucumber parallel execution.

The current configuration supports:

```json
"parallel": 3
```

This allows up to three scenarios to execute concurrently.

For serial execution:

```json
"parallel": 1
```

> Increase parallelism carefully based on CPU, memory, application capacity, browser resources, and test-data isolation.

## 📊 Reporting

The framework integrates **Multiple Cucumber HTML Reporter**.

After execution, the HTML report is generated under:

```text
test-results/reports/index.html
```

A Cucumber JSON report is also generated:

```text
test-results/cucumber-report.json
```

Reports provide visibility into:

- Passed scenarios
- Failed scenarios
- Scenario duration
- Step-level execution
- Feature execution
- Failure diagnostics

## 📸 Screenshots and Videos

Failure diagnostics include screenshots and videos for failed scenarios.

Typical locations:

```text
test-results/
├── reports/
├── logs/
└── videos/
```

These artifacts help with failure analysis and debugging.

## 📝 Logging

The framework uses **Winston** for logging.

Logging is centralized in:

```text
src/utils/logger.ts
```

Benefits:

- Consistent log format
- Centralized configuration
- Easier debugging
- Better failure investigation
- Separation of logging from test logic

## 🧪 Example Test Flow

```text
Feature
   │
   ▼
Step Definition
   │
   ▼
Page Object
   │
   ▼
Playwright
   │
   ▼
Browser
```

### Feature

```gherkin
Scenario: Login with invalid credentials

  When I login with username "wronguser" and password "wrongpass"
  Then I should see login error message "Invalid username or password!"
```

### Step Definition

```typescript
When(
  "I login with username {string} and password {string}",
  async function (username: string, password: string) {
    await fixture.loginPage.login(username, password);
  }
);
```

### Page Object

```typescript
async login(username: string, password: string) {
  await this.username.fill(username);
  await this.password.fill(password);
  await this.loginButton.click();
}
```

This keeps:

- Gherkin focused on business behavior
- Step definitions focused on glue code
- Page objects focused on UI implementation

## 🔍 Locator Strategy

Prefer stable Playwright locators:

```typescript
page.getByRole()
page.getByLabel()
page.getByText()
page.getByTestId()
```

Avoid unnecessarily fragile selectors such as:

```typescript
page.locator("div:nth-child(4) > div > button")
```

The goal is to make tests resilient to non-functional DOM changes.

## 🧹 Code Quality

Run ESLint:

```bash
npm run lint
```

Fix ESLint issues where possible:

```bash
npm run lint:fix
```

Check formatting:

```bash
npm run prettier
```

Format files:

```bash
npm run prettier:fix
```

## 🪝 Git Hooks

Husky is configured with:

```text
.husky/
├── pre-commit
├── pre-push
└── commit-msg
```

Git hooks help maintain code quality before changes are committed or pushed.

## 🧭 Recommended Development Workflow

```text
1. Create feature branch
        ↓
2. Add/update Gherkin scenario
        ↓
3. Implement/update Step Definition
        ↓
4. Implement/update Page Object
        ↓
5. Run tagged scenario
        ↓
6. Run complete test suite
        ↓
7. Run ESLint
        ↓
8. Run Prettier
        ↓
9. Review report and logs
        ↓
10. Commit and push
```

## 🐛 Troubleshooting

### Browser not installed

```bash
npx playwright install
```

### Application URL is incorrect

Verify:

```env
BASEURL=https://your-application-url
```

### Wrong browser

Verify:

```env
BROWSER=chrome
```

Supported:

```text
chrome
firefox
webkit
```

### Browser is not visible

Use:

```env
HEADLESS=false
```

### Rerun failed scenarios

```bash
npm run execute:failed
```

### Report is not overwritten

Check:

```env
REPORT_OVERWRITE=true
```

## 📈 CI/CD Readiness

The framework is suitable for integration with:

- GitHub Actions
- Jenkins
- Azure DevOps
- GitLab CI/CD
- Docker-based execution
- Cloud browser platforms

A typical CI pipeline can follow:

```text
Checkout
   ↓
Install Node dependencies
   ↓
Install Playwright browsers
   ↓
Configure environment
   ↓
Run lint
   ↓
Run Cucumber tests
   ↓
Generate HTML/JSON reports
   ↓
Publish test artifacts
```

## 🔐 Security Guidelines

Never commit:

```text
Passwords
API keys
Access tokens
Private certificates
Production credentials
Secrets
```

Use:

```text
app.env
```

for local configuration and CI/CD secret-management facilities for pipeline execution.

Use:

```text
app.env.sample
```

as the safe configuration template.

## 📚 Useful Commands

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm ci` | Install locked dependencies |
| `npx playwright install` | Install Playwright browsers |
| `npm test` | Execute Cucumber tests |
| `npm run execute` | Execute tests and generate report |
| `npm run execute:tag --tags="@positive"` | Execute tagged scenarios |
| `npm run test:failed` | Execute scenarios from rerun file |
| `npm run execute:failed` | Execute failed scenarios and report |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run prettier` | Check formatting |
| `npm run prettier:fix` | Format project |

## 🎯 Best Practices

### Framework Design

- Page Object Model
- Separation of concerns
- Reusable utilities
- Centralized configuration
- Centralized timeouts
- Business-readable Gherkin
- Reusable step definitions

### Test Stability

- Prefer Playwright auto-waiting
- Avoid unnecessary hard waits
- Use stable locators
- Keep scenarios independent
- Keep test data isolated
- Use retry carefully rather than hiding genuine failures

### Maintainability

- Keep feature files business-readable
- Keep UI implementation inside page objects
- Keep reusable functionality in utilities
- Avoid duplicated locators
- Keep environment configuration outside test code

## 🚀 Future Enhancements

The architecture can be extended with:

- API automation
- Visual regression testing
- Accessibility testing
- BrowserStack integration
- Sauce Labs integration
- GitHub Actions
- Jenkins
- Azure DevOps
- Docker
- Allure reporting
- TestRail integration
- Jira integration
- Advanced test-data management
- Environment-specific configuration
- Distributed/large-scale parallel execution

## 🤝 Contributing

Create a feature branch:

```bash
git checkout -b feature/<feature-name>
```

Validate your changes:

```bash
npm run lint
npm run prettier
npm run execute
```

Commit and push:

```bash
git add .
git commit -m "Add <feature>"
git push origin feature/<feature-name>
```

When opening a Pull Request, include:

- Description of the change
- Test scenarios added/updated
- Test execution results
- Relevant failure evidence where applicable

## 👤 Author

**Vinod Pasi**

Lead SDET / QA Automation Leader

GitHub:  
https://github.com/vinodkpasi

## 📄 License

This project is intended for educational and demonstration purposes.

---

## ⭐ Framework Summary

```text
Playwright
    +
Cucumber BDD
    +
TypeScript
    +
Page Object Model
    +
Hooks & Fixtures
    +
Logging
    +
HTML/JSON Reporting
    +
Retry / Rerun
    +
Parallel Execution
    +
Environment Configuration
    +
CI/CD Readiness
```

This repository demonstrates a modern approach to building maintainable, scalable web UI automation with **Playwright + Cucumber + TypeScript**.
