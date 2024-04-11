import { Page } from "@playwright/test";
import { error } from "console";
import HomePage from "../pages/HomePage";

export default class LoginPage {
  private readonly usernameInputSelector = "input#Email";
  private readonly passwordInputSelector = "input#Password";
  private readonly loginButtonSelector = "button.btn.btn-primary.w-100";
  private mypage: Page;

  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.goto("/");
  }

  async InputUsername(username: string) {
    await this.page.locator(this.usernameInputSelector).fill(username);
  }

  async InputPassword(password: string) {
    await this.page.locator(this.passwordInputSelector).fill(password);
  }

  async clickLoginButton() {
    await this.page
      .locator(this.loginButtonSelector)
      .click()
      .catch((error) => {
        console.error("Error clicking login button: ${error}");
        throw error;
      });

    const homepage = new HomePage(this.page);
    return homepage;
  }
}
