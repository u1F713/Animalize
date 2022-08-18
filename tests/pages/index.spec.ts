import { test, expect } from '@playwright/test'

test('homepage has Awesome in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('/')
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Awesome Gallery/)

  // create a locator
  const getStarted = page.locator('text=Awesome Gallery')

  await getStarted.isVisible()
})
