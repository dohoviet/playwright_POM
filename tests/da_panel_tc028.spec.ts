import { test, expect } from "../fixture/page.objects";

test.describe('Panels page', () => {
      test('Verify that when "Add New Panel" form is on focused all other control/form is disabled or locked.', async ({ loginPage, panelsPage }) => {
      //Navigate to Dashboard login page
      await loginPage.gotoLoginPage();
      //Log in specific repository with valid account
      await loginPage.login("Administrator","");
      //Go to Panels page
      await panelsPage.gotoPanelsPage();
      
      await panelsPage.addPanel();

      //The right way to check if a dialog is modal
      await expect(panelsPage.overlaydiv).toBeVisible();

      //This way is not reccomended!!!
      expect(await panelsPage.verifyAllControlDisable()).toEqual(true);    
      });    
});