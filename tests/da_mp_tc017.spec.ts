import { test, expect } from "../fixture/page.objects";

test.describe('Public page', () => {
  test('Verify that "Public" pages can be visible and accessed by all users of working repository', async ({ loginPage, publicPage }) => {
    //Navigate to Dashboard login page
    await loginPage.gotoLoginPage();
    //Log in specific repository with valid account
    await loginPage.login("Administrator","");
    //Go to Global Setting -> Add page 
    await publicPage.addPage({name: "Test Child", parent: "Test"});
    //Click on Log out link
    // await loginPage.logout("administrator");
    //Log in with another valid account (potay!)
    // await loginPage.login("Administrator","");
    //Check newly added page is visibled
    // await expect(publicPage.newlyAddedPageLink).toBeVisible();
    //Click on Log out link
    // await loginPage.logout("administrator");
    //Log in with another valid account (potay!)
    // await loginPage.login("Administrator","");

    // await publicPage.removePage("TC014");
    });
});
// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.locator('body').click();
//   await page.goto('http://localhost/TADashboard/login.jsp');
//   await page.getByText('Login SampleRepository Login').click();
//   await page.getByText('Login').nth(1).click();
//   await page.getByRole('link', { name: 'Add Page' }).click();
//   await page.locator('#name').fill('Test');
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('link', { name: 'Add Page' }).click();
//   await page.locator('#name').fill('Test Child');
//   await page.locator('#parent').selectOption('cyg1bisxz1py');
//   await page.getByRole('button', { name: 'OK' }).click();
//   await page.getByRole('link', { name: 'Test', exact: true }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('link', { name: 'Delete' }).click();
//   await page.getByRole('link', { name: 'Test', exact: true }).click();
//   await page.getByRole('link', { name: 'Test Child' }).click();
//   await page.locator('.mn-setting > a').click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('link', { name: 'Delete' }).click();
//   await page.getByRole('link', { name: 'Test', exact: true }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   await page.getByRole('link', { name: 'Delete' }).click();
// });