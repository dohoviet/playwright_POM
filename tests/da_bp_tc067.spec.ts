import { test, expect } from "../fixture/page.objects";

test.describe('Data Profiles', () => {
  test('Verify that user can login specific repository successfully via Dashboard login page with correct credentials', async ({ profilesPage }) => {
    await profilesPage.open();
    console.log( await profilesPage.table.getRows());

    });
});