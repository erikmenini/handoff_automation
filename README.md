# Handoff Automation

Automation tests for the Handoff app on Android.

## 1. Test Plan
To access the test plan, just click the link below:

[Test Plan](https://drive.google.com/file/d/1Wy8lz5E_IjHyGLvKKAkH39M8HVaghaXs/view?usp=sharing)

## 2. Android Studio Configuration

Make sure Android Studio is installed and properly configured on your machine. You will need the Android SDK to run tests on Android devices.

## 3. Project

This project is an automation test suite for the Handoff app, using WebdriverIO, Appium, and other testing tools.

### Project Structure
- src/config: WebdriverIO configuration files.
- src/data: Data used in the tests.
- src/interface: TypeScript interfaces for data models.
- src/page-objects: Page objects representing the user interface.
- src/steps: Test actions and steps.
- src/tests: Test files.
- src/utils: Utility functions.

## 4. Tools

- **Node.js** 
- **Appium** - Server to emulate a mobile device
- **Android SDK** - To perform tests on Android
- **WebdriverIO** - Framework to assist in mapping elements, actions, etc.
- **Mocha** - Testing framework
- **Allure** - Library to generate reports at the end of the test

## 5. How to Run the Tests

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/handoff_automation.git
cd handoff_automation
```

2. Install the dependencies:
```
npm install
```

### Configuration
- You will need to create a device in Android Studio, to create it just access: [Create virtual device](https://developer.android.com/studio/run/managing-avds)

- With the device created, you will need to go to the file src/config/wdio.conf.ts
- You will need to change the following code snippet:

```
 capabilities: [
    {
        platformName: 'Android',
        'appium:deviceName': 'Pixel 8 Pro',
        'appium:platformVersion': '15',
        'appium:automationName': 'UiAutomator2',
        'appium:app': `./app/handoff-155-aab.apk`, 
        'appium:autoGrantPermissions': true,
        'appium:unicodeKeyboard': true,
    },
  ],
```

The necessary changes will be:
- appium:deviceName: Enter the name of the created device here
- appium:platformVersion: Enter the OS version of the created device here

3. Running the tests
To run, execute in the terminal: npm run <execution-command>

Possible commands:
Para executar execute no terminal: npm run <comando-para-execução>

Possíveis comandos:

````
test:android:all
````

Run all tests on Android

```
test:android:login
```
Runs the login test suite on Android.
```
test:android:onboarding
```
Runs the onboarding test suite on Android.
```
test:android:estimate
```
Runs the estimate test suite on Android.
```
test:android:client
```
Runs the client test suite on Android.
```

Example
```
npm run test:android:all
```

6. Observations
- The .github folder contains a workflow that was not possible to check, this workflow executes the tests in dev, qa, and prod environments.
- It's possible to run manually too on GitHub Actions, if this workflow works
- The tests by the workflow will not run because they depend on BrowserStack to run, and the configuration only runs locally.
- There is another file that executes the tests every night in the workflow folder.