import { test, devices } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { ResetPasswordPage } from '../pages/ResetPasswordPage.js';
import loginData from '../testdata/login.json';

test.use({ ...devices['Pixel 5'] });

test.describe('OrangeHRM login - mobile POM', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test('TC01 - displays the login form on mobile', async () => {
    await loginPage.expectLoginForm();
  });

  test('TC02 - accepts a username', async () => {
    await loginPage.enterUsername(loginData.username);
  });

  test('TC03 - masks the password value', async () => {
    await loginPage.enterPassword(loginData.password);
  });

  test('TC04 - shows required validation for empty credentials', async () => {
    await loginPage.submitEmptyForm();
  });

  test('TC05 - logs in with valid credentials', async ({ page }) => {
    await loginPage.login(loginData.username, loginData.password);
    await new DashboardPage(page).expectLoaded();
  });

  test('TC06 - rejects an invalid username', async () => {
    await loginPage.login(loginData['invalid username'], loginData.password);
    await loginPage.expectInvalidCredentials();
  });

  test('TC07 - rejects an invalid password', async () => {
    await loginPage.login(loginData.username, loginData['invalid password']);
    await loginPage.expectInvalidCredentials();
  });

  test('TC08 - rejects invalid username and password together', async () => {
    await loginPage.login(loginData['invalid username'], loginData['invalid password']);
    await loginPage.expectInvalidCredentials();
  });

  test('TC09 - opens the password reset page', async ({ page }) => {
    await loginPage.openPasswordReset();
    await new ResetPasswordPage(page).expectLoaded();
  });

  test('TC10 - exposes all footer social links', async () => {
    await loginPage.expectSocialLinks();
  });
});
