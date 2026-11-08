import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/\/dashboard\/index/);
    await expect(this.dashboardHeading).toBeVisible();
  }
}
