import { suites } from './test-suites'

export const config: WebdriverIO.Config = {
  specs: ['../tests/**/*.spec.ts'],
  exclude: [],
  maxInstances: 1,
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
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 300000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 400000,
  },
  suites: suites,
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  afterTest: async function () {
    await browser.takeScreenshot()
  },
}
