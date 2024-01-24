import { test, expect } from "../fixture/page.objects";
import Constant from "../data/constant";

test.describe('Login', () => {
  test('DA_LOGIN_TC002 - Verify that user fails to login specific repository successfully via Dashboard login page with incorrect credentials', async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(Constant.INVALID_USERNAME,Constant.PASSWORD);

    await loginPage.verifyErrorMessage("Username or password is invalid");
    });
});