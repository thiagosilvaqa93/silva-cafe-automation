import { test, expect } from '@playwright/test';

test('Menu should display items', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const items = page.locator('.menu .box');

    console.log('MENU COUNT:', await items.count());

    await expect(items.first()).toBeVisible();
    await expect(items).toHaveCount(5, { timeout: 10000 });
});