import { suites } from './test-suites'

export const config: WebdriverIO.Config = {
  specs: ['../tests/**/*.spec.ts'],
  exclude: [],
  maxInstances: 2,
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
  logLevel: 'trace',
  bail: 0,
  waitforTimeout: 180000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 180000,
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
