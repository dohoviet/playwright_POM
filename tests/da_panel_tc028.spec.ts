import { test, expect } from "../fixture/page.objects";
import Constant from "../data/constant";

test.describe('Panels page', () => {
      test('DA_PANEL_TC028 - Verify that when "Add New Panel" form is on focused all other control/form is disabled or locked.', async ({ loginPage, panelsPage }) => {
      // Navigate to Dashboard login page
      await loginPage.gotoLoginPage();
      // Log in specific repository with valid account
      await loginPage.login(Constant.USERNAME, Constant.PASSWORD);
      // Go to Panels page
      await panelsPage.gotoPanelsPage();
      
      await panelsPage.addPanel();

      // The right way to check if a dialog is modalx
      await expect(panelsPage.overlaydiv).toBeVisible();

      // This way is not reccomended!!!
      expect(await panelsPage.verifyAllControlDisable()).toEqual(true);    
      });    
});