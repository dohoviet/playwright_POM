import { test, expect } from "../fixture/page.objects";

test.describe('Login', () => {
  test('Verify that user can login specific repository successfully via Dashboard login page with correct credentials', async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login("Administrator","");

    await expect(loginPage.page).toHaveTitle(/TestArchitect ™ - Execution Dashboard/);
    });

  test('Verify that user fails to login specific repository successfully via Dashboard login page with incorrect credentials', async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login("abc","abc");

    await loginPage.verifyErrorMessage("Username or password is invalid");
    });
});