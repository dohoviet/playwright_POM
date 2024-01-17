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