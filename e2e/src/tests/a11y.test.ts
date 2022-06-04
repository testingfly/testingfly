import test from '../helpers/BaseTest';
import { checkA11y, injectAxe } from 'axe-playwright';

test.describe('A11Y Testing', () => {
  test.beforeEach(async ({}) => {});

  test('@a11y Dashboard has no detectable a11y violations on load', async ({ dashboard }) => {
    await dashboard.loadPage();
    await dashboard.verifyA11y();
  });
});
