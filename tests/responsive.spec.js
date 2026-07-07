import { test, expect } from '@playwright/test';

test('Mobile layout works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('header')).toBeVisible();
});