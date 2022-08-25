import BasePage from "./Base.page";

class SortablePage extends BasePage {
    static get url() {
        return "/sortable"
      }
    static get numberDivs(){
        return cy.get("#demo-tabpane-list > div > div")
    }


}

export default SortablePage