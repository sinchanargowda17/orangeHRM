import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPassword = page.getByText('Forgot your password?');
    this.requiredMessage = page.getByText('Required');
    this.invalidCredentialsMessage = page.getByText('Invalid credentials');
    this.loginHeading = page.getByRole('heading', { name: 'Login' });
    this.socialLinks = page.locator('.orangehrm-login-footer-sm a');
  }

  async open() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoginForm() {
    await expect(this.loginHeading).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
    await expect(this.usernameInput).toHaveValue(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toHaveAttribute('type', 'password');
  }

  async submitEmptyForm() {
    await this.loginButton.click();
    await expect(this.requiredMessage).toHaveCount(2);
  }

  async expectInvalidCredentials() {
    await expect(this.invalidCredentialsMessage).toBeVisible();
  }

  async openPasswordReset() {
    await this.forgotPassword.click();
    return this.page;
  }

  async expectSocialLinks() {
    await expect(this.socialLinks).toHaveCount(4);
    await expect(this.socialLinks.nth(0)).toHaveAttribute('href', /linkedin\.com/);
    await expect(this.socialLinks.nth(1)).toHaveAttribute('href', /facebook\.com/);
    await expect(this.socialLinks.nth(2)).toHaveAttribute('href', /twitter\.com/);
    await expect(this.socialLinks.nth(3)).toHaveAttribute('href', /youtube\.com/);
  }
}
