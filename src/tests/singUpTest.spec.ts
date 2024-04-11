import {test} from "@playwright/test";
import LoginPage from "../pages/SignUpPage";
import SignUPPage from "../pages/SignUpPage";


test("SignUp_Page_TestCase",async({ page }) => {

    const signup = new SignUPPage(page);
    await signup.navigateToLoginPage();
    await signup.ClickSignupLink();
    await signup.InputFirstname("Admon");
    await signup.InputLastname("Todam");
    await signup.InputEmail("Admon.Todam@mailinator.com");
    await signup.InputPassword("Test@1234567890");
    await signup.ClickCaptchaCheckbox();
    await signup.ClickSignupbutton();
  //  await signup.expectSentemailTextTobeVisible();
});