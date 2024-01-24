import { test, expect } from "../fixture/page.objects";
import Constant from "../data/constant";

test.describe('Login', () => {
  test('DA_LOGIN_TC001 - Verify that user can login specific repository successfully via Dashboard login page with correct credentials', async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login(Constant.USERNAME, Constant.PASSWORD);

    await expect(loginPage.page).toHaveTitle(/TestArchitect ™ - Execution Dashboard/);
    });
});