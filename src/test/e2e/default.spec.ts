import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Next.js Template(TodoList)");
});

test('has header', async ({ page }) => {
  const expectedHeaderTitle = "This is Next.js Template";

  // Act
  const actualHeaderTitle = await page.getByTestId('header-title').innerHTML();

  // Assert
  expect(actualHeaderTitle).toEqual(expectedHeaderTitle);
});
