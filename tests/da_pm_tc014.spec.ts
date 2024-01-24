import { test, expect } from "../fixture/page.objects";
import Constant from "../data/constant";

test.describe('Public page', () => {
  test('TC_MP_TC014 - Verify that "Public" pages can be visible and accessed by all users of working repository', async ({ loginPage, publicPage }) => {
    // Navigate to Dashboard login page
    await loginPage.gotoLoginPage();
    // Log in specific repository with valid account
    await loginPage.login(Constant.USERNAME, Constant.PASSWORD);
    // Add a page
    await publicPage.addPage({name: Constant.PAGENAME});
    // Click on Log out link
    await loginPage.logout(Constant.USERNAME);
    // Log in with another valid account (potay!)
    await loginPage.login(Constant.USERNAME, Constant.PASSWORD);
    // Check newly added page is visibled
    await expect(publicPage.newlyAddedPageLink).toBeVisible();
    // Click on Log out link
    await loginPage.logout(Constant.USERNAME);
    // Log in with another valid account (potay!)
    await loginPage.login(Constant.USERNAME, Constant.PASSWORD);
    // Remove newly added page
    await publicPage.removePage({name: Constant.PAGENAME}, "Are you sure you want to remove this page?");
    });
});

