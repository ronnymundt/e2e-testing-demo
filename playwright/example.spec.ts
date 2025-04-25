import { test, expect } from '@playwright/test';

test('Registration Send Test', async ({ page }) => {
  await page.goto('http://localhost:4200/home');

  const setElementByKeyValue = async (key: string, value: string) => {
    const element = page.getByTestId(key);
    await element.focus();
    await element.fill(value);
  };

  // set input values
  await setElementByKeyValue('first-name', 'Charles');
  await setElementByKeyValue('last-name', 'Xavier');
  await setElementByKeyValue('street', '1407 Graymalkin Lane');
  await setElementByKeyValue('zip', '10560');
  await setElementByKeyValue('city', 'North Salem');
  await setElementByKeyValue('state', 'NY');
  await setElementByKeyValue('country', 'USA');

  // click send button
  await page.getByTestId('send').click();

  // check for success message
  const success = page.getByTestId('success');
  await expect(success).toBeVisible();
});

test('Required Validation Test Register Form', async ({ page }) => {
  await page.goto('http://localhost:4200/home');

  // click send button
  await page.getByTestId('send').click();

  const form = page.getByTestId('example-form');
  // check if form is invalid and touched
  await expect(form).toHaveClass(/ng-invalid/);
  await expect(form).toHaveClass(/ng-touched/);
});
