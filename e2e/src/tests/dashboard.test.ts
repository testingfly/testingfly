import test from '../helpers/BaseTest';

test.describe('Dashboard', () => {
  test.beforeEach(async ({  }) => {});

  test('@smoke should show correct page title', async ({ dashboard }) => {
    await dashboard.loadPage();
    await dashboard.verifyPageTitle();
  });
});
