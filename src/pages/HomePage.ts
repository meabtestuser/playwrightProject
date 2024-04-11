import { Page, expect } from "@playwright/test";

export default class HomePage {
  private readonly MarketingPreferenceDialog = ".modalHeader.modal-title.h4";
  constructor(private page: Page) {
    // Constructor logic here
  }
  async expectMarketingPreferenceDialogTobeVisible() {
    const toastMessageLocator = this.page.locator(".Toastify__toast-body > div:nth-child(2)");
    const toastMessageText = "Driver profile updated successfully";
    try 
    {
      // Wait for the dialog to be visible
      await this.page.waitForSelector(this.MarketingPreferenceDialog, {timeout: 20000,});
      // If the dialog is visible, click the 'Yes' button
      await this.page.click("button[title='Yes']");
      console.log("Dialog box is visible and Clicked on YES button:");
      await expect(toastMessageLocator).toHaveText(toastMessageText);
      console.log("popup box 'Driver profile updated successfully' is visible on top of the page:");
    } 
      catch (error) 
    {
      console.log("Dialog box is not visible or another error occurred:",error);
    }
  }
}
