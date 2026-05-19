# 🎭 Playwright JavaScript HRMS Automation Framework

![Playwright Tests](https://github.com/BhaveshQA/playwright-js-hrms-framework/actions/workflows/playwright.yml/badge.svg)
![Playwright Version](https://img.shields.io/badge/Playwright-v1.60-45ba4b?logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&logoColor=white)
![Allure Report](https://img.shields.io/badge/Reporting-Allure-orange?logo=data:image/svg+xml;base64,)
![License](https://img.shields.io/badge/License-ISC-blue)

> A scalable, enterprise-ready end-to-end test automation framework built with **Playwright** and **JavaScript** for HRMS web application testing. Designed with clean architecture principles — POM, BasePage, reusable utilities, Allure reporting, and CI/CD integration via GitHub Actions.

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Framework Architecture](#-framework-architecture)
- [Key Features](#-key-features)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Running Tests](#-running-tests)
- [Test Reporting](#-test-reporting)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Environment Configuration](#-environment-configuration)
- [Author](#-author)

---

## 🎯 About the Project

This framework provides a production-grade automation solution for HRMS (Human Resource Management System) web applications. It demonstrates real-world QA engineering practices including:

- **Separation of concerns** between test logic, page objects, and utilities
- **Reusable BasePage architecture** to eliminate code duplication across page classes
- **Dynamic locator handling** for robust element interactions
- **Data-driven testing** with external test data management
- **Full CI/CD integration** with automated test execution on every push and pull request
- **Allure reporting** with detailed test steps, screenshots on failure, and trend tracking

This framework is built to reflect enterprise standards used in HRMS domains including employee management, payroll, leave management, and authentication workflows.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Test Framework | [Playwright](https://playwright.dev/) v1.60 |
| Language | JavaScript (ES6+) |
| Runtime | Node.js 18+ |
| Reporting | Allure Reports |
| CI/CD | GitHub Actions |
| Config Management | dotenv |
| Version Control | Git + GitHub |

---

## 🏗 Framework Architecture

```
playwright-js-hrms-framework/
│
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD pipeline
│
├── basePage/
│   └── basePage.js                 # Base class with reusable Playwright methods
│                                   # (click, fill, waitFor, assertions, etc.)
│
├── objectManager/
│   └── objectManager.js            # Centralized page object registry
│                                   # Single entry point for all page instances
│
├── pages/
│   ├── loginPage.js                # Login page — locators + actions
│   ├── dashboardPage.js            # Dashboard page — locators + actions
│   └── ...                         # Additional page objects per module
│
├── tests/
│   ├── login.spec.js               # Login test scenarios (positive + negative)
│   └── ...                         # Test specs organized by feature/module
│
├── testdata/
│   └── testdata.js                 # Centralized test data (users, inputs, etc.)
│
├── utility/
│   └── helpers.js                  # Shared utility functions across tests
│
├── .env.example                    # Environment variable template (safe to commit)
├── .gitignore                      # Git exclusions (node_modules, .env, reports)
├── package.json                    # Project dependencies and npm scripts
├── playwright.config.js            # Playwright configuration (browsers, timeouts, reporters)
└── README.md                       # Project documentation
```

### Design Patterns Used

- **Page Object Model (POM)** — Each page is a class encapsulating its own locators and actions
- **BasePage Pattern** — A shared base class that all page objects extend, avoiding duplication of common Playwright interactions
- **Object Manager** — A single factory/registry class that instantiates all page objects, making test files clean and readable
- **Data Separation** — Test data lives in `/testdata`, completely decoupled from test logic

---

## ✨ Key Features

- ✅ **Page Object Model (POM)** — Maintainable, modular page layer
- ✅ **BasePage architecture** — Reusable Playwright wrapper methods for all pages
- ✅ **Object Manager** — Single-point page object access in test specs
- ✅ **Dynamic locator handling** — Robust selectors that handle real-world UI changes
- ✅ **External test data** — Data-driven via `testdata.js`, easy to scale
- ✅ **Allure Reporting** — Rich HTML reports with steps, screenshots, and history
- ✅ **GitHub Actions CI/CD** — Automated test runs on push and pull_request
- ✅ **Environment config** — `.env` based configuration for multi-environment support
- ✅ **Cross-browser ready** — Playwright supports Chromium, Firefox, WebKit
- ✅ **Screenshot on failure** — Automatic screenshot capture for failed tests

---

## 📦 Prerequisites

Before running this project, ensure you have installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- [Git](https://git-scm.com/)

Verify your setup:
```bash
node --version
npm --version
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/BhaveshQA/playwright-js-hrms-framework.git
cd playwright-js-hrms-framework
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your HRMS application details:

```env
BASE_URL=https://your-hrms-app.com
USERNAME=your_test_username
PASSWORD=your_test_password
```

---

## ▶️ Running Tests

### Run all tests (headless)
```bash
npx playwright test
```

### Run all tests (headed — see the browser)
```bash
npx playwright test --headed
```

### Run a specific test file
```bash
npx playwright test tests/login.spec.js
```

### Run tests matching a keyword
```bash
npx playwright test --grep "login"
```

### Run tests on a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests with Playwright UI mode (interactive)
```bash
npx playwright test --ui
```

---

## 📊 Test Reporting

This framework uses **Allure** for rich, interactive test reporting.

### Generate and open Allure report

```bash
# Run tests with Allure reporter
npx playwright test

# Generate Allure report
npx allure generate allure-results --clean -o allure-report

# Open the report in browser
npx allure open allure-report
```

### HTML report (built-in Playwright)
```bash
npx playwright show-report
```

> 💡 Reports include: test status, execution time, steps breakdown, screenshots on failure, and history trend across runs.

---

## ⚙️ CI/CD Pipeline

This framework is fully integrated with **GitHub Actions**. Tests are triggered automatically on:

- Every `push` to `main` branch
- Every `pull_request` targeting `main`

The pipeline:
1. Sets up Node.js environment
2. Installs dependencies
3. Installs Playwright browsers
4. Runs the full test suite
5. Uploads Allure report as a downloadable artifact

View live CI runs: [GitHub Actions](https://github.com/BhaveshQA/playwright-js-hrms-framework/actions)

---

## 🔐 Environment Configuration

Sensitive configuration is managed via environment variables. **Never commit your `.env` file.**

Create your local `.env` by copying the example:

```bash
cp .env.example .env
```

`.env.example` (safe to share):
```env
BASE_URL=
USERNAME=
PASSWORD=
```

For CI/CD, configure these as **GitHub Secrets** under:
`Settings → Secrets and variables → Actions`

---

## 👨‍💻 Author

**Bhavesh Rathod**
Senior QA Automation Engineer | 13+ Years Experience

- 🔗 [LinkedIn](https://www.linkedin.com/in/bhavesh-rathod-38b89615/)
- 🐙 [GitHub](https://github.com/BhaveshQA)
- 📧 engineerqa.bhavesh007@gmail.com

---

## 📄 License

This project is licensed under the ISC License.

---

> *"Quality is never an accident; it is always the result of intelligent effort."* — John Ruskin