import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { Config } from "@playwright/test";
import { config } from "process";






test("LoginPage_TestCase",async({ page }) => {

    //const loginPage = new LoginPage(page);
     require('dotenv').config({path: '.env'});
    
    console.log(process.env.NODE_ENV);
    console.log(process.env.userid!);
    console.log(process.env.password!);
   

    // await loginPage.navigateToLoginPage();
    // await loginPage.InputUsername(process.env.userid!);
    // await loginPage.InputPassword(process.env.password!);
    // const homepage = await loginPage.clickLoginButton();
    // await homepage.expectMarketingPreferenceDialogTobeVisible();

});
