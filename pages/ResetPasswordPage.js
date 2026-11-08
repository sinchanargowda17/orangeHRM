import { expect } from '@playwright/test';

export class ResetPasswordPage {
  constructor(page) {
    this.page = page;
    this.resetPasswordHeading = page.getByRole('heading', { name: 'Reset Password' });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/auth\/requestPasswordResetCode/);
    await expect(this.resetPasswordHeading).toBeVisible();
  }
}
