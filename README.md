# Playwright BDD Automation Framework

This repository contains a **Playwright + BDD (Cucumber / Reqnroll) + TypeScript** based test automation framework.  
The framework follows **Page Object Model (POM)**, **SOLID principles**, and is designed for **scalability, maintainability, and CI/CD readiness**.

---

## 🚀 Tech Stack

- **Playwright** – UI automation
- **BDD (Cucumber / Reqnroll)** – Gherkin-based test scenarios
- **TypeScript** – Strongly typed language support
- **Node.js / npm** – Dependency management
- **Husky** – Git hooks for code quality
- **HTML / JSON Reports** – Execution reporting

---

## 📁 Project Structure

```
pro/
│── .husky/                 # Git hooks
│── reports/                # Test execution reports
│── src/
│   │── features/           # Gherkin feature files
│   │── hooks/              # Before / After hooks
│   │── pages/              # Page Object Model classes
│   │── step_definitions/   # Step definitions (glue code)
│   │── utils/              # Reusable utilities
│   │── timeouts.ts         # Centralized timeouts
│── playwright.config.ts    # Playwright configuration
│── cucumber.json           # BDD runner configuration
│── package.json            # Project dependencies & scripts
│── tsconfig.json           # TypeScript configuration
│── README.md               # Project documentation
```

---

## 🧩 Folder Details

### `features/`
- Contains **Gherkin (.feature)** files
- Business-readable test scenarios

Example:
```gherkin
Scenario: Valid login
  Given user is on login page
  When user enters valid credentials
  Then user should see dashboard
```

---

### `hooks/`
- Manages test lifecycle
- Browser and context initialization
- Cleanup after scenario execution

---

### `pages/`
- Implements **Page Object Model (POM)**
- Encapsulates locators and UI actions

Files:
- `base.page.ts` – Common reusable methods
- `login.page.ts` – Login page actions

---

### `step_definitions/`
- Maps Gherkin steps to executable code
- Uses page objects to perform actions

---

### `utils/`
Reusable helper utilities such as:
- Browser initialization
- Logging
- Reporting helpers

---

## ⚙️ Installation

1. Clone the repository
```bash
git clone <repository-url>
cd pro
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

## ▶️ Running Tests

### Run all tests
```bash
npm test
```

### Run tests with tags
```bash
npm test -- --tags "@smoke"
```

### Run in headed mode
```bash
npx playwright test --headed
```

---

## 📊 Reports

- Execution reports are generated inside the **`reports/`** folder
- HTML and JSON reports supported

---

## 🔁 Retry & Flaky Test Handling

- Playwright retry mechanism can be enabled via `playwright.config.ts`
- Scenario-level retries supported in BDD runner

---

## 🔐 Git Hooks (Husky)

Husky is configured to:
- Enforce commit message standards
- Run checks before commit and push

---

## 🧪 Best Practices Followed

- Page Object Model (POM)
- BDD for readability
- Centralized configuration & timeouts
- Reusable utilities
- Clean separation of concerns

---

## 🛠 Future Enhancements

- Allure reporting integration
- Parallel execution optimization
- Docker support
- API + UI combined testing

---

## 👤 Author

**Vinod Kumar**

---

## 📄 License

This project is licensed for internal and educational use.

