import { Locator, Page } from '@playwright/test';

//abstract?
export  class UserTable {
    page: Page;
    baseURL = 'https://datatables.net/extensions/select/examples/initialisation/checkbox.html';
    tableId: string = "example";

    constructor(page: Page) {
        this.page = page;
    }

    async getRows(){
        // let tatbleId: string = `table#${this.tatbleId} tbody`;
        // console.log(tatbleId); 

        // const parentBody = await this.page.locator(tatbleId);
        // this.getTableLocatoryById("example");
        // await this.page.waitForTimeout(3000);
        return (this.getTableLocator().locator('tr').count());
    }

    async getRowData(rowIndex: number){
        const row_text = await this.getTableLocator().locator(`tr`).nth(rowIndex).locator(`:scope`).allInnerTexts();
        let rtext = "";
        await row_text.forEach((text) => {
            rtext += text;
        });
        return rtext;
    }

    async getCellData(rowIndex: number, columnIndex: number){
        return await this.getTableLocator().locator(`tr`).nth(rowIndex).locator(`:scope`).locator(`td`).nth(columnIndex).innerText();
    }

    async getColumnData(columnIndex: number){
        let arrColumnText = new Array; 
        let rowCount = await this.getRows();
        for (let i = 0; i < rowCount; i++) {
            arrColumnText.push(await this.getCellData(i, columnIndex));
            // console.log (await this.getCellData(i, columnIndex));
          }
        return arrColumnText;
    }

    async getColumnDataByName(columnName: string){
        let arrColumnText = new Array; 
        let columnIndex = -1;
        const columns = await this.getTableHeaderLocator().locator(`tr`).nth(0).locator(`th`).count();
        for (let j = 0; j < columns; j++) {
            if(await this.getTableHeaderLocator().locator(`tr`).nth(0).locator(`th`).nth(j).innerText()===columnName) {
                columnIndex=j;
                break;
            }
        }

        let rowCount = await this.getRows();
        for (let i = 0; i < rowCount; i++) {
            arrColumnText.push(await this.getCellData(i, columnIndex));
            // console.log (await this.getCellData(i, columnIndex));
          }
        return arrColumnText;
    }

    getTableLocator(): Locator {
        let parentBody = `table#${this.tableId} tbody`;
        // let tableId = '';
        // console.log(parentBody); 

        return this.page.locator(parentBody);
    }

    getTableHeaderLocator(): Locator {
        let thead = `table#${this.tableId} thead`;
        // let tableId = '';
        // console.log(parentBody); 

        return this.page.locator(thead);
    }
    
}