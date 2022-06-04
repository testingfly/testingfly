import { test as base } from '@playwright/test';
import { DashboardPO } from '../pageobjects/pages/dashboard.po';

const test = base.extend<{
  dashboard: DashboardPO;
}>({
  dashboard: async ({ page }, use) => {
    await use(new DashboardPO(page));
  },
});

export default test;
