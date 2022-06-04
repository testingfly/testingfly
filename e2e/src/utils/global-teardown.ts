import * as path from 'path';
import * as fse from 'fs-extra';

async function globalTeardown() {
  await updateAllureHistory();
}

export default globalTeardown;

async function updateAllureHistory() {
  const srcDir = path.join(__dirname, '../', 'report/allure-history/history');
  const desDir = path.join(__dirname, '../', 'report/allure/history');
  if (fse.existsSync(srcDir)) {
    try {
      fse.copySync(srcDir, desDir, { overwrite: true });
    } catch (err) {
      console.error(err);
    }
  }
}
