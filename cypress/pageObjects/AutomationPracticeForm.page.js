import BasePage from "./Base.page";

class AutomationPracticeFormPage extends BasePage {
    static get url() {
        return "/automation-practice-form";
      }
      static get firstNameInput(){
        return cy.get("#firstName")
      }
      static get lastNameInput(){
        return cy.get("#lastName")
      }
      static get emailInput(){
        return cy.get("#userEmail")
      }
      static getGenderInputByValue(value){
        return cy.get("input[value='"+value+"']")
      }
      static get numberInput(){
        return cy.get("#userNumber")
      }
      static get dateOfBirthInput(){
        return cy.get("#dateOfBirthInput")
      }
      static get subjectsInput(){
        return cy.get("#subjectsInput")
      }
      static calendarSetYear(year){
        return cy.get("select.react-datepicker__year-select").select(year)
      }
      static calendarSetMonth(value){
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let finalValue = String(months.indexOf(value)+1)
        return cy.get("select.react-datepicker__month-select").select(finalValue)
      }
      static calenderSetDay(day){
        return cy.get(".react-datepicker__week").contains(day).click()
      }
      static get subjectsContainer(){
        return cy.get("#subjectsContainer")
      }
      static get mathsBtn(){
        return cy.get("#subjectsContainer:last-child > div > div > div").eq(1)
      }
      static get hobbiesCheckbox1(){
        return cy.get("#hobbies-checkbox-1")
      }
      static get currentAddressInput(){
        return cy.get("#currentAddress")
      }
      static get selectStateBtn(){
        return cy.get("#state > div > div > div:last-child").eq(1)
      }
      static get selectCityBtn(){
        return cy.get("#city > div > div > div:last-child").eq(1)
      }
      static get stateSelection(){
        return cy.get("#state > div > div:first-child > div[tabindex='-1']")
      }
      static get citySelection(){
        return cy.get("#city > div > div > div[tabindex='-1']")
      }
      static get submitBtn(){
        return cy.get("#submit")
      }
      static getValueFields(index){
        return cy.get("tbody > tr > td:last-child").eq(index)
      }


}

export default AutomationPracticeFormPage
