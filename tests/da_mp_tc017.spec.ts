import { test, expect } from "../fixture/page.objects";

test.describe('Public page', () => {
  test('Verify that user can remove any main parent page except "Overview" page successfully and the order of pages stays persistent as long as there is not children page under it', async ({ loginPage, publicPage }) => {
    //Navigate to Dashboard login page
    await loginPage.gotoLoginPage();
    //Log in specific repository with valid account
    await loginPage.login("Administrator","");
    //Go to Global Setting -> Add page "Test"
    await publicPage.addPage({name: "Test"});
    //Go to Global Setting -> Add page "Test Child"
    await publicPage.addPage({name: "Test Child", parent: "Test"});
    //Delete parent page
    await publicPage.removePage({name: "Test"}, "Are you sure you want to remove this page?");
    //Delete child page
    await publicPage.removePage({name: "Test Child", parent: "Test"}, "Are you sure you want to remove this page?");
    //Check children page is deleted
    await publicPage.checkPageExist({name: "Test Child", parent: "Test"});
    //Delete parent page
    await publicPage.removePage({name: "Test"}, "Are you sure you want to remove this page?");
    //Check parent page is deleted
    await publicPage.checkPageExist({name: "Test"});
    //Check if Delete disapppear after clicking on Overview menu item
    await publicPage.checkDeleteButton();
    
    });
});
