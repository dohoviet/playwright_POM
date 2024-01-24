import { Locator, Page } from '@playwright/test';

//abstract?
export  class UserTable {
    tableLocator: Locator;

    constructor(locator: Locator) {
        this.tableLocator = locator;
    }
    
    async getRows(){
        return ( this.tableLocator.locator("tbody").locator('tr').count());
    }

    async getRowData(rowIndex: number){
        const row_text = await  this.tableLocator.locator("tbody").locator(`tr`).nth(rowIndex).locator(`:scope`).allInnerTexts();
        let rtext = "";
        await row_text.forEach((text) => {
            rtext += text;
        });
        return rtext;
    }

    async getCellData(rowIndex: number, columnIndex: number){
        return await  this.tableLocator.locator("tbody").locator(`tr`).nth(rowIndex).locator(`:scope`).locator(`td`).nth(columnIndex).innerText();
    }

    async getColumnData(columnIndex: number){
        let arrColumnText = new Array; 
        let rowCount = await this.getRows();
        for (let i = 0; i < rowCount; i++) {
            arrColumnText.push(await this.getCellData(i, columnIndex));
          }
        return arrColumnText;
    }

    async getColumnDataByName(columnName: string){
        let arrColumnText = new Array; 
        let columnIndex = -1;
        const columns = await this.tableLocator.locator("thead").locator(`tr`).nth(0).locator(`th`).count();
        for (let j = 0; j < columns; j++) {
            if(await this.tableLocator.locator("thead").locator(`tr`).nth(0).locator(`th`).nth(j).innerText()===columnName) {
                columnIndex=j;
                break;
            }
        }

        let rowCount = await this.getRows();
        for (let i = 0; i < rowCount; i++) {
            arrColumnText.push(await this.getCellData(i, columnIndex));
          }
        return arrColumnText;
    }
}