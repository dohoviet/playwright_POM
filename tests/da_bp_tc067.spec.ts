import { test, expect } from "../fixture/page.objects";
import DataProfiles from "../data/data-profiles";
import Constant from "../data/constant";

test.describe('Data Profiles', () => {
  test('DA_DP_TC067 - Verify that Data Profiles are listed alphabetically', async ({ loginPage, profilesPage }) => {

      // //Navigate to Dashboard login page
      await loginPage.gotoLoginPage();
      // //Log in specific repository with valid account
      await loginPage.login(Constant.USERNAME, Constant.PASSWORD);
      // Go to Panels page
      await profilesPage.gotoDataProfiles();
      // Verify that Data Profiles are listed alphabetically
      const actualPresetDataProfiles = (await (await profilesPage.getTable()).getColumnDataByName("Data Profile")).sort();
      expect(actualPresetDataProfiles).toEqual(DataProfiles.expectedPresetDataProfiles.sort());
    });
});