import { WebActions } from 'e2e/src/helpers/WebActions';
import type { Page } from 'playwright';

let webActions: WebActions;

export class DashboardPO {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
  }

  async loadPage(): Promise<void> {
    await webActions.navigateToURL('/');
  }

  async verifyPageTitle(): Promise<void> {
    await webActions.verifyPageTitle('Testingfly');
  }

  async verifyA11y(): Promise<void> {
    await webActions.verifyA11y(this.page);
  }
}
