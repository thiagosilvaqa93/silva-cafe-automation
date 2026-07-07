# 🧪 Silva Café — QA Automation (Playwright)

Automated end-to-end testing project for the Silva Café website using Playwright.

## 🎯 Purpose

This project was created to demonstrate QA Automation skills by validating the main user flows of a web application.

The tests cover:

- UI validation
- Navigation flows
- Responsive behavior
- Browser automation using Playwright

## 🧪 Test Coverage

### Navigation Testing

- Validate navigation to the About section
- Verify page sections and user flows

### UI Testing

- Validate menu visibility
- Confirm expected number of menu items

### Responsive Testing

- Verify mobile layout behavior
- Test application responsiveness across different screen sizes

## ⚙️ Tech Stack

- Playwright
- JavaScript (Node.js)
- HTML / CSS / JavaScript

## 📁 Project Structure

```
silva-cafe-automation
│
├── tests
│   ├── navigation.spec.js
│   ├── responsive.spec.js
│   └── ui.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 How to Run

### Install dependencies

```bash
npm install
```

### Start the Silva Café website

Before running the tests, start the website locally:

```bash
cd ../Silva-cafe
python3 -m http.server 52230
```

Application URL:

```
http://localhost:52230
```

### Run Playwright tests

```bash
npx playwright test
```

### Run tests with browser visible

```bash
npx playwright test --headed
```

## 📊 Test Results

Current test status:

```
✓ Navigation works to About section
✓ Mobile layout works
✓ Menu should display 5 items

3 passed
```

## 👨‍💻 Author

Thiago Silva

QA Automation | Playwright | JavaScript
