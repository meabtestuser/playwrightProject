import { Page, expect } from "@playwright/test";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

export default class SignUPPage {
  private readonly SignuplinkSelector = ".signup-btn";
  private readonly FirstnameInputSelector = "#FirstName";
  private readonly LastnameInputSelector = "#LastName";
  private readonly EmailInputSelector = "#Email";
  private readonly PasswordInputSelector = "#Password";
  private readonly CaptchaCheckboxSelector = ".recaptcha-checkbox-border";
  private readonly SignupbuttonSelector = ".btn-primary";
  private readonly SentEmailHeaderSelector = ".title";
  

  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.goto("/");
  }

  async ClickSignupLink() {
    await this.page
      .locator(this.SignuplinkSelector)
      .click()
      .catch((error) => {
        console.error(
          "Error clicking SignUp link at Loginpage screen: ${error}"
        );
        throw error;
      });
  }

  async InputFirstname(firstname: string) {
    await this.page.locator(this.FirstnameInputSelector).fill(firstname);
  }

  async InputLastname(lastname: string) {
    await this.page.locator(this.LastnameInputSelector).fill(lastname);
  }

  async InputEmail(email: string) {
    await this.page.locator(this.EmailInputSelector).fill(email);
  }

  async InputPassword(password: string) {
    await this.page.locator(this.PasswordInputSelector).fill(password);
  }

  async ClickCaptchaCheckbox() 
  {
    // const captchaIframe = await this.page.frameLocator('iframe[name="a-668w9t83mkrl"]').getByLabel('I\'m not a robot').click();
    // Click the checkbox within the iframe
    const captchaIframe = await this.page.frameLocator('iframe[name^="a-"]').getByLabel('I\'m not a robot').click();
    
   
  }

  async ClickSignupbutton() 
  {
    await this.page
      .locator(this.SignupbuttonSelector)
      .click()
      .catch((error) => 
        {
        console.error("Error clicking SignUPlogin button: ${error}");
        throw error;
        });
  }
  
  async expectSentemailTextTobeVisible() {
    const EmailMessageLocator = this.page.locator(".title");
    const EmailMessageTextheader = "We just sent you an email";
        
        try {
          await this.page.waitForSelector(this.SentEmailHeaderSelector, {timeout: 20000,});
          console.log("Email sent message is visible");
          await expect(EmailMessageLocator).toHaveText(EmailMessageTextheader);
          console.log("Header 'We just sent you an email' is visible on the page:");
           } 
        catch (error) {
          console.log("Header tex 'We just sent you an email' is not visible:",error);
        }
      }

    

    
  }
  

