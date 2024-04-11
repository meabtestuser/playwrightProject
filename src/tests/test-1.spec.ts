import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://driver.staging.emsp.instavolt.co.uk/profile');
  await page.goto('https://driver.staging.emsp.instavolt.co.uk/login');
  await page.getByLabel('Email ID').click();
  await page.getByLabel('Email ID').fill('stdr1@mailinator.com');
  await page.getByLabel('Email ID').press('Tab');
  await page.getByLabel('Password').fill('Test@1234567890');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('dialog').getByText('Marketing Preferences').click({
    button: 'right'
  });
  await page.getByRole('dialog').getByText('Marketing Preferences').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('link', { name: 'Charging & Payment History' }).click();
  await page.getByRole('link', { name: 'Payment Configuration' }).click();
  await page.getByRole('link', { name: 'Rewards' }).click();
  await page.locator('div').filter({ hasText: /^Driver profile updated successfully$/ }).nth(1).click();
  await page.getByRole('link', { name: 'RFID Cards' }).click();
  await page.getByRole('button', { name: 'st dr' }).click();
  await page.getByRole('button', { name: 'Log Out Log Out' }).click();
});