import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test.skip("LoginPage_TestCase",async({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.InputUsername("stdr1@mailinator.com");
    await loginPage.InputPassword("Test@1234567890");
    const homepage = await loginPage.clickLoginButton();
    await homepage.expectMarketingPreferenceDialogTobeVisible();

});

test("NODE_ENV_TestCase",async({ page }) => {

    console.log(process.env.NODE_ENV);
    console.log(process.env.userid);
    console.log(process.env.password);
});