import { test, expect } from "../fixture/page.objects";

test.describe('Data Profiles', () => {
  test('Verify that user can login specific repository successfully via Dashboard login page with correct credentials', async ({ profilesPage }) => {
    // await profilesPage.open();
    console.log( await (await profilesPage.getTableById('https://datatables.net/extensions/select/examples/initialisation/checkbox.html','example')).getRows());
    console.log( await (await profilesPage.getTableById('https://datatables.net/extensions/select/examples/initialisation/checkbox.html','example')).getRowData(0));
    console.log( await (await profilesPage.getTableById('https://datatables.net/extensions/select/examples/initialisation/checkbox.html','example')).getRowData(9));
    console.log( await (await profilesPage.getTableById('https://datatables.net/extensions/select/examples/initialisation/checkbox.html','example')).getCellData(9,1));
    console.log( await (await profilesPage.getTableById('https://datatables.net/extensions/select/examples/initialisation/checkbox.html','example')).getColumnData(1));
    console.log( await (await profilesPage.getTableById('https://datatables.net/extensions/select/examples/initialisation/checkbox.html','example')).getColumnDataByName("Name"));
    });
});