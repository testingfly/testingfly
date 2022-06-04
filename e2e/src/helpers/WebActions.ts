import * as fs from 'fs';
import type { Page } from 'playwright';
import { expect } from '@playwright/test';
import { testConfig } from '../config/testconfig';
import * as path from 'path';
import { checkA11y, injectAxe, reportViolations } from 'axe-playwright';
const waitForElement = testConfig.waitForElement;

export class WebActions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToURL(path: string) {
    this.page.goto(path);
  }

  async waitForElementAttached(
    locator: string,
    timeout?: number
  ): Promise<void> {
    if (timeout) {
      await this.page.waitForTimeout(timeout);
    }
    await this.page.waitForSelector(locator);
  }

  async waitForPageNavigation(event?: string, path?: string): Promise<void> {
    switch (event) {
      case `networkidle`:
        await this.page.waitForNavigation({
          waitUntil: `networkidle`,
          timeout: waitForElement,
        });
        break;
      case `load`:
        await this.page.waitForNavigation({
          waitUntil: `load`,
          timeout: waitForElement,
        });
        break;
      case `domcontentloaded`:
        await this.page.waitForNavigation({
          waitUntil: `domcontentloaded`,
          timeout: waitForElement,
        });
        break;
      case `commit`:
        await this.page.waitForNavigation({
          waitUntil: `commit`,
          timeout: waitForElement,
        });
        break;
      case `url`:
        await this.page.waitForNavigation({ url: path });
        break;
      default:
        await this.page.waitForNavigation();
    }
  }

  async waitForLoadState(event: string): Promise<void> {
    switch (event.toLowerCase()) {
      case `networkidle`:
        await this.page.waitForLoadState('networkidle');
        break;
      case `load`:
        await this.page.waitForLoadState('load');
        break;
      case `domcontentloaded`:
        await this.page.waitForLoadState('domcontentloaded');
    }
  }

  async delay(time: number): Promise<void> {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  async clickElement(locator: string): Promise<void> {
    await this.waitForElementAttached(locator);
    await this.page.click(locator);
  }

  async hoverElement(locator: string): Promise<void> {
    await this.waitForElementAttached(locator);
    await this.page.hover(locator);
  }

  async clickElementJS(locator: string): Promise<void> {
    await this.waitForElementAttached(locator);
    await this.page.$eval(locator, (element: HTMLElement) => element.click());
  }

  /**
   *
   * @param x x-coordinate
   * @param y y-cooridinate
   * @param times number of clicks
   */
  async mouseLeftClick(x: number, y: number, times?: number): Promise<void> {
    await this.page.mouse.click(x, y, { clickCount: times });
  }

  async enterElementText(locator: string, text: string): Promise<void> {
    await this.waitForElementAttached(locator);
    await this.page.fill(locator, text);
  }

  async inputElementTextMatForm(locator: string, text: string): Promise<void> {
    await this.page.locator(locator).fill(''); //clear content to populate dropdown on fill/refill
    await this.page.locator(locator).fill(text);
    await this.page.locator('.mat-option-text >> text=' + text).click();
  }

  async inputDateTime(locator: string, text: string): Promise<void> {
    await this.page.fill(locator, text);
  }

  async dragAndDrop(
    dragElementLocator: string,
    dropElementLocator: string
  ): Promise<void> {
    await this.waitForElementAttached(dragElementLocator);
    await this.waitForElementAttached(dropElementLocator);
    await this.page.dragAndDrop(dragElementLocator, dropElementLocator);
  }

  async selectOptionFromDropdown(
    locator: string,
    option: string
  ): Promise<void> {
    await this.waitForElementAttached(locator);
    const selectDropDownLocator = await this.page.$(locator);
    selectDropDownLocator?.type(option);
  }

  async selectOptionFromMatSelectDropdown(
    locator: string,
    option: string
  ): Promise<void> {
    // ".mat-option-text >> text=Absolute"
    await this.page.locator(locator).click();
    await this.page.locator('.mat-option-text >> text=' + option).click();
  }

  async getTextFromWebElements(locator: string): Promise<string[]> {
    await this.waitForElementAttached(locator);
    return this.page.$$eval(locator, (elements) =>
      elements.map((item) => item.textContent!.trim())
    );
  }

  async getTextFromWebElement(locator: string): Promise<string | null> {
    await this.waitForElementAttached(locator);
    return this.page.textContent(locator);
  }

  async downloadFile(locator: string): Promise<string> {
    const [download] = await Promise.all([
      this.page.waitForEvent(`download`),
      this.page.click(locator),
    ]);
    await download.saveAs(
      path.join(__dirname, `../Downloads`, download.suggestedFilename())
    );
    return download.suggestedFilename();
  }

  async keyPress(locator: string, key: string): Promise<void> {
    this.page.press(locator, key);
  }

  async readValuesFromTextFile(filePath: string): Promise<string> {
    return fs.readFileSync(`${filePath}`, `utf-8`);
  }

  async writeDataIntoTextFile(
    filePath: number | fs.PathLike,
    data: string | NodeJS.ArrayBufferView
  ): Promise<void> {
    fs.writeFile(filePath, data, (error) => {
      if (error) throw error;
    });
  }

  async verifyElementText(locator: string, text: string): Promise<void> {
    await this.waitForElementAttached(locator);
    const textValue = await this.page.textContent(locator);
    expect(textValue?.trim()).toBe(text);
  }

  async verifyElementContainsText(
    locator: string,
    text: string
  ): Promise<void> {
    await this.waitForElementAttached(locator);
    await expect(this.page.locator(locator)).toContainText(text);
  }

  async verifyMatFormElementText(locator: string, text: string): Promise<void> {
    await this.waitForElementAttached(locator);
    await this.clickElement(locator);
    const additional_result = '.mat-button-wrapper >>  text=/.*\\d.*result.*/';
    if (await this.isElementDisplayed(additional_result)) {
      await this.clickElement(additional_result);
    }
    const textValue = await this.page.textContent(
      '.mat-option >> text=' + text
    );
    expect(textValue?.trim()).toBe(text);
  }

  async verifyPageTitle(text: string): Promise<void> {
    await this.waitForLoadState('networkidle');
    expect(await this.page.title()).toBe(text);
  }

  async verifyJSElementValue(locator: string, text: string): Promise<void> {
    await this.waitForElementAttached(locator);
    const textValue = await this.page.$eval(
      locator,
      (element: HTMLInputElement) => element.value
    );
    expect(textValue.trim()).toBe(text);
  }

  async verifyElementAttribute(
    locator: string,
    attribute: string,
    value: string
  ): Promise<void> {
    await this.waitForElementAttached(locator);
    const textValue = await this.page.getAttribute(locator, attribute);
    expect(textValue?.trim()).toBe(value);
  }

  async verifyElementIsDisplayed(
    locator: string,
    errorMessage: string
  ): Promise<void> {
    await this.page
      .waitForSelector(locator, { state: `visible`, timeout: waitForElement })
      .catch(() => {
        throw new Error(`${errorMessage}`);
      });
  }

  async isElementDisplayed(locator: string): Promise<boolean> {
    return await this.page.isVisible(locator);
  }

  async expectToBeTrue(status: boolean, errorMessage: string): Promise<void> {
    try {
      expect(status).toBe(true);
    } catch (exception) {
      throw new Error(`${errorMessage}`);
    }
  }

  async expectToBeValue(
    actualValue: string,
    expectedValue: string,
    errorMessage: string
  ): Promise<void> {
    try {
      expect(actualValue.trim()).toBe(expectedValue);
    } catch (exception) {
      throw new Error(`${errorMessage} ` + exception);
    }
  }

  async verifySnapshot(
    screenshot: string,
    errorMessage: string,
    locator?: string
  ): Promise<void> {
    try {
      if (locator) {
        expect(await this.page.locator(locator).screenshot()).toMatchSnapshot(
          screenshot
        );
      } else {
        expect(await this.page.screenshot()).toMatchSnapshot(screenshot);
      }
    } catch (exception) {
      throw new Error(`${errorMessage} ` + exception);
    }
  }

  async verifyStatusCode(
    locator: string,
    code: number,
    path: string
  ): Promise<void> {
    // wait for API response
    const [response] = await Promise.all([
      this.page.waitForResponse(path),
      this.page.click(locator),
    ]);
    expect(response.status()).toEqual(code);
  }

  async waitForSpinner(locator: string): Promise<void> {
    await this.page.waitForSelector(locator, { state: 'detached' });
  }

  async reloadPage(): Promise<void> {
    await this.page.reload();
  }

  async verifyA11y(page: Page): Promise<void> {
    await this.waitForPageNavigation();
    await injectAxe(page);
    await checkA11y(page, undefined, {
      axeOptions: {
        // runOnly: {
        //   type: 'tag',
        //   values: ['wcag2a', 'wcag2aa', 'wcag2aaa'],
        // },
      },
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  }
  
}
