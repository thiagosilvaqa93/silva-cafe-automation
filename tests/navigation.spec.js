import { test, expect } from '@playwright/test';

test('Navigation works to About section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.locator('a[href="#about"]').click();

    await expect(page.locator('#about')).toBeVisible();
});