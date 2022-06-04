import { chromium } from 'playwright';
import fs from 'fs';
import { FullConfig } from '@playwright/test';
import { testConfig } from '../config/testconfig';

async function globalSetup(config: FullConfig) {
  // await saveStorage();
}

async function saveStorage() {
  const env = process.env['ENV'];

  if (!fs.existsSync('e2e/src/config/auth.' + env + '.json')) {
    const browser = await chromium.launch({
      args: ['--auth-server-whitelist="_"'],
      headless: false,
    });
    const page = await browser.newPage({ ignoreHTTPSErrors: true });
    await page.goto(testConfig[env!]);
    await page.waitForLoadState('networkidle');
    await page.locator('text=CORP.COM  >> nth=1').click();
    await page.waitForNavigation({ url: '**/network' });
    console.log('Saving auth state...');
    await page.context().storageState({ path: 'e2e/src/config/auth.' + env + '.json' });
    await browser.close();
  }
}

export default globalSetup;
