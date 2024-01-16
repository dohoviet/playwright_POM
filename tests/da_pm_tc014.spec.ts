import { test, expect } from "../fixture/page.objects";

test.describe('Public page', () => {
  test('Verify that "Public" pages can be visible and accessed by all users of working repository', async ({ loginPage, publicPage }) => {
    //Navigate to Dashboard login page
    await loginPage.gotoLoginPage();
    //Log in specific repository with valid account
    await loginPage.login("Administrator","");
    //Go to Global Setting -> Add page 
    await publicPage.addPage("TC014");
    //Click on Log out link
    await loginPage.logout("administrator");
    //Log in with another valid account (potay!)
    await loginPage.login("Administrator","");
    //Check newly added page is visibled
    await expect(publicPage.newlyAddedPageLink).toBeVisible();
    //Click on Log out link
    // await loginPage.logout("administrator");
    //Log in with another valid account (potay!)
    // await loginPage.login("Administrator","");

    await publicPage.removePage("TC014");
    });
});

