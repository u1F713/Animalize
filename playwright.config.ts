import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const playwrightConfiguration: PlaywrightTestConfig = {
  testDir: './',
  reporter: 'html',
  outputDir: 'tests/results/',
  testIgnore: '**/node_module/**',
  fullyParallel: true,
  forbidOnly: !(process.env.CI == null),
  retries: process.env.CI != null ? 2 : 0,
  workers: process.env.CI != null ? 1 : undefined,

  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:1616',
    trace: 'on-first-retry'
  },

  webServer: {
    command: 'pnpm next dev --port 1616',
    port: 1616,
    reuseExistingServer: process.env.CI == null
  },

  projects: [
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]
}

export default playwrightConfiguration
