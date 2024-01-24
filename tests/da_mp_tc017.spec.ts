import { test, expect } from "../fixture/page.objects";
import Constant from "../data/constant";

test.describe('Public page', () => {
  test('DA_MP_TC017 - Verify that user can remove any main parent page except "Overview" page successfully and the order of pages stays persistent as long as there is not children page under it', async ({ loginPage, publicPage }) => {
    // Navigate to Dashboard login page
    await loginPage.gotoLoginPage();
    // Log in specific repository with valid account
    await loginPage.login(Constant.USERNAME, Constant.PASSWORD);
    // Go to Global Setting -> Add page "Test"
    await publicPage.addPage({name: Constant.PAGENAME});
    // Go to Global Setting -> Add page "Test Child"
    await publicPage.addPage({name: Constant.CHILD_PAGENAME, parent: Constant.PAGENAME});
    // Delete parent page
    await publicPage.removePage({name: Constant.PAGENAME}, "Are you sure you want to remove this page?");
    // Delete child page
    await publicPage.removePage({name: Constant.CHILD_PAGENAME, parent: Constant.PAGENAME}, "Are you sure you want to remove this page?");
    // Check children page is deleted
    await publicPage.checkPageExist({name: Constant.CHILD_PAGENAME, parent: Constant.PAGENAME});
    // Delete parent page
    await publicPage.removePage({name: Constant.PAGENAME}, "Are you sure you want to remove this page?");
    // Check parent page is deleted
    await publicPage.checkPageExist({name: Constant.PAGENAME});
    // Check if Delete disapppear after clicking on Overview menu item
    await publicPage.checkDeleteButton();
    
    });
});
