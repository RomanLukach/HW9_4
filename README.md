<h1 align="center"> Bonus calculation Testing</h1>

## Table of Contents

- [About](#about)
- [Pre-requisites](#pre-requisites)
- [Installation procedure](#installation-procedure)
- [Test script execution](#test-script-execution)
- [Documentation](#documentation)

## About

Provided scripts are for Home Work 9.4 in "QA инженер. Полная автоматизация" course provided by ITSwitcher (https://it-switcher.online/).
Provided scripts are written on JavaScript programming language and fulfill following tasks:
- hw9_3.js - calculate Bonus
- hw9_3.test.js - set of tests to verify hw9_3.js

Script hw9_3.js calculate bonus as following:
1. Bonus is equal to 50 if sum of "a" and "b" greater 50
2. Bonus is equal to sum of "a" and "b" in all other cases

Script hw9_3.js does not check following data:
1. "a" and "b" are text or digits
2. "a" and "b" are positive or negtive digits
3. blocked two tests (were one of the values ("a" or "b") is text) to avoid negative test results 
Therefore, test results could have negative results.

# Pre-requisites
The following programs and SW packages should be installed to prior of script tests.
1. Visual Studio Code
2. NodeJS (version 16.18.0 or higher)
3. npm (version 8.19.2 or higher)
4. jest
5. babel-plugin-istanbul 
PS: npm will be installaed with Node.js installation

# Installation procedure
1. Copy this package from the git: Code -> Download ZIP
2. Unzip loaded file (HW9_4-main.zip) to appropriate location on you computer. Folder HW9_4-main will be created accordingly.
3. Open this folder in Visual Studio Code
4. Open terminal window in Visual Studio Code and execute following commands:

```bash
npm install --save-dev jest
```
```bash
npm install --save-dev babel-plugin-istanbul
```

# Test script execution
Execute following command in Visual Studio Code terminal window:

```bash
npm run test
```
Script hw9_3.test.js will be executed and test results wil be presented in terminal window as follwoing:
```bash
> hw9_4@1.0.0 test
> jest

 PASS  ./hw9_3.test.js
  Bonus calculation - positive tests
    ✓ Positive tests (1 ms)
    ✓ Boundary values (1 ms)
    ✓ Negative (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.343 s, estimated 1 s
Ran all test suites.
```

# Documentation

More info and documentation about all used tolls and programm packages could be found by the following links:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Jest](https://jestjs.io)
- [babel-plugin-istanbul](https://www.npmjs.com/package/babel-plugin-istanbul)
- [JavaScript Standard (ECMAScript 2022) programming language](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)



shall be installed babel-plugin-istanbul shall be instaleld to be able to see tests coverage statistics.
run test as following:
npx jest --coverage

The folder Coveraga will be created in the project Explorer view in Visual Studio code.
Find the "index.html" file.
Tap left button and select " Open with Live Server ".

In the open web browser view you will see genera lstatistics by the test.
Tested file name is a link and you can get more info about test covereage by the source code lines (how many time there were executed during a tests).
The tested script (hw9_3.js) does not have any conditions and we test it for different test data only. Therefore, some line repeated few times.