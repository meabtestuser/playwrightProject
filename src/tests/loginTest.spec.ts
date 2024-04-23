import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import env from "../env/";





test("LoginPage_TestCase",async({ page }) => {

    //const loginPage = new LoginPage(page);
    console.log(process.env.URL);
    console.log(process.env.userid);
    console.log(process.env.password);

    // await loginPage.navigateToLoginPage();
    // await loginPage.InputUsername(process.env.userid);
    // await loginPage.InputPassword();
    // const homepage = await loginPage.clickLoginButton();
    // await homepage.expectMarketingPreferenceDialogTobeVisible();

});
