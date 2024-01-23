import { test, expect } from "../fixture/page.objects";
import DataProfiles from "../data/data-profiles";

test.describe('Data Profiles', () => {
  test('Verify that user can login specific repository successfully via Dashboard login page with correct credentials', async ({ loginPage, profilesPage }) => {

      // //Navigate to Dashboard login page
      // await loginPage.gotoLoginPage();
      // //Log in specific repository with valid account
      // await loginPage.login("Administrator","");
      // Go to Panels page
      // await profilesPage.gotoDataProfiles();

      await profilesPage.open('/extensions/select/examples/initialisation/checkbox.html');

      // console.log( await (await profilesPage.getTable()).getRows());
      // console.log( await (await profilesPage.getTable()).getRowData(0));
      // console.log( await (await profilesPage.getTable()).getRowData(9));
      // console.log( await (await profilesPage.getTable()).getCellData(9,1));
      // console.log( await (await profilesPage.getTable()).getColumnData(1));
      // console.log( await (await profilesPage.getTable()).getColumnDataByName("Name"));

      const actualPresetDataProfiles = (await (await profilesPage.getTable()).getColumnDataByName("Name")).sort();
      expect(actualPresetDataProfiles).toEqual(DataProfiles.expectedPresetDataProfiles.sort());
    });
});