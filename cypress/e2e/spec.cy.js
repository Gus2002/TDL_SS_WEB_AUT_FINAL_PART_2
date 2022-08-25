import AutomationPracticeFormPage from "../pageObjects/AutomationPracticeForm.page";



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