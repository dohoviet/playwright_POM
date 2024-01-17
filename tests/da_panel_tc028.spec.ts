import { test, expect } from "../fixture/page.objects";

test.describe('Panel page', () => {
  test('Verify that when "Add New Panel" form is on focused all other control/form is disabled or locked.', async ({ loginPage, panelsPage }) => {
    //Navigate to Dashboard login page
    await loginPage.gotoLoginPage();
    //Log in specific repository with valid account
    await loginPage.login("Administrator","");
    //Go to Panels page
    await panelsPage.addPanel();
    await panelsPage.verifyAllControlDisable();
    });
});