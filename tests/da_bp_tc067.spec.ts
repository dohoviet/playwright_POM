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

      // console.log( await (await profilesPage.getTableById('example')).getRows());
      // console.log( await (await profilesPage.getTableById('example')).getRowData(0));
      // console.log( await (await profilesPage.getTableById('example')).getRowData(9));
      // console.log( await (await profilesPage.getTableById('example')).getCellData(9,1));
      // console.log( await (await profilesPage.getTableById('example')).getColumnData(1));
      // console.log( await (await profilesPage.getTableById('example')).getColumnDataByName("Name"));

      await profilesPage.open('/extensions/select/examples/initialisation/checkbox.html');

      const actualPresetDataProfiles = (await (await profilesPage.getTableById('example')).getColumnDataByName("Name")).sort();
      expect(actualPresetDataProfiles).toEqual(DataProfiles.expectedPresetDataProfiles.sort());
    });
});