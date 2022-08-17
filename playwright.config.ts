import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'
import { config } from 'dotenv'

config({ path: '.env.local' })

const playwrightConfiguration: PlaywrightTestConfig = {
  testDir: './',
  reporter: 'html',
  outputDir: 'tests/results/',
  testIgnore: '**/node_module/**',

  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  fullyParallel: true,
  forbidOnly: !(process.env.CI == null),
  retries: process.env.CI != null ? 2 : 0,
  workers: process.env.CI != null ? 1 : undefined,

  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry'
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
  ],

  webServer: {
    command: 'pnpm next dev --port 1616',
    port: 1616
  }
}

export default playwrightConfiguration
