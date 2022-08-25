import AutomationPracticeFormPage from "../pageObjects/AutomationPracticeForm.page";
import SortablePage from "../pageObjects/Sortable.page";



context("Automation practice form testing", () => {
  beforeEach(() => {
    AutomationPracticeFormPage.visit();
  });

  it("Scenario 1 - Forms - Practice forms", () => {
    AutomationPracticeFormPage.firstNameInput.type("John")
    AutomationPracticeFormPage.lastNameInput.type("James")
    AutomationPracticeFormPage.emailInput.type("james@mail.com")
    AutomationPracticeFormPage.getGenderInputByValue("Male").click({force:true})
    AutomationPracticeFormPage.numberInput.type("27564859")
    AutomationPracticeFormPage.dateOfBirthInput.click()
    AutomationPracticeFormPage.calendarSetYear("1984")
    AutomationPracticeFormPage.calendarSetMonth("February")
    AutomationPracticeFormPage.calenderSetDay("29")
    AutomationPracticeFormPage.subjectsInput.type("Maths")
    AutomationPracticeFormPage.mathsBtn.click()
    AutomationPracticeFormPage.hobbiesCheckbox1.click({force:true})
    AutomationPracticeFormPage.currentAddressInput.type("High Street 17")
    AutomationPracticeFormPage.selectStateBtn.click()
    AutomationPracticeFormPage.stateSelection.eq(0).click()
    AutomationPracticeFormPage.selectCityBtn.click()
    AutomationPracticeFormPage.citySelection.eq(0).click()
    AutomationPracticeFormPage.submitBtn.click()
    const validation_information = ["John James", "james@mail.com", "Male", "27564859", "29 February,1984",
  "Maths", "Sports", "", "High Street 17", "NCR Delhi"]
    for(let i=0;i<10;i++){
      AutomationPracticeFormPage.getValueFields(i).should("have.text",validation_information[i])
    }
  });

})

context("Interactions testing", () => {
  beforeEach(() => {
    SortablePage.visit();
  });

  it.only("Scenario 2 - Interactions - Sortable", () => {
    
    let numbers = ["One", "Two", "Three", "Four", "Five", "Six"]
    for(let i = 0;i<6;i++){
      SortablePage.numberDivs.eq(i).should("have.text", numbers[i])
    }
    let coordinate = -225
    for(let j=0;j<5;j++){
      SortablePage.numberDivs.eq(5).click().trigger("mousedown", {
        button: 0
      }).trigger('mousemove', 0, coordinate, {force:true}).click({force:true})
      if(j!==4) coordinate+=50
      else coordinate+=25
    }
    numbers.reverse()
    for(let k = 0;k<6;k++){
      SortablePage.numberDivs.eq(k).should("have.text", numbers[k])
    }

  });

})