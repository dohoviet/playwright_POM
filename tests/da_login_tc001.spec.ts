import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('getting started should contain table of contents', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login("Administrator","");

  await expect(loginPage.page).toHaveTitle(/TestArchitect ™ - Execution Dashboard/);
});

// import { test, expect } from "../fixture/page.objects";

// test.describe('New Todo', () => {
//     test('should allow me to add todo items', async ({ todoPage }) => {
//         await todoPage.goto();
//         const todoItem = "buy some cheese";
//         await todoPage.addTodo(todoItem);
//         await expect(todoPage.todoTitle).toHaveText(todoItem);
//     });
// });

// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/login'

// test('test', async ({ page }) => {
//   await page.goto('http://localhost/TADashboard/login.jsp');
//   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').fill('administrator');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('');
//   await page.getByText('Login').nth(1).click();

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/TestArchitect ™ - Execution Dashboard/);
// }
// );