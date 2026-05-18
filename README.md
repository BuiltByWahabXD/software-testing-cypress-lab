# Software Testing Lab Assignment

## Student Information
Name: Abdul Wahab

Course: Software Testing  
Course Code: CSE482

## Technologies Used
- Cypress
- Node.js
- JavaScript
- VS Code

## Website Tested
https://www.saucedemo.com

---

# Project Setup

## Install Dependencies

```bash
npm install
```

## Open Cypress

```bash
npx cypress open
```

---

# Task 1 Coverage

## Login Tests
- Valid Login
- Invalid Password
- Empty Fields Validation

## Navigation Tests
- Menu Navigation
- Multi-page Navigation

## Form Test
- Checkout Form Submission

---

# Task 2 Coverage

## Assertions
- be.visible
- have.text
- have.attr

## Negative Assertion
- not.exist

## Alias Practice
- Using .as() and @alias

## Custom Commands
- Custom login command

## beforeEach Hook
- Used for repeated setup

---

# Folder Structure

```text
cypress/
├── e2e/
├── fixtures/
├── support/
```
