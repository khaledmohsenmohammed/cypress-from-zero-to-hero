const { onNavigationPage } = require("../support/page_object/NavigatioPage");
const { onFormLayoutsPage } = require("../support/page_object/FormLayoutPage");
const { onDatepickerPage } = require("../support/page_object/DatepickerPage");
const { onSmartTablePage } = require("../support/page_object/SmartTablePage");
describe("Test with Page Objects", () => {
  // Page Object
  //the beforeEach() function is called before each test in the describe block
  beforeEach(() => {
    cy.openHomePage();
  });

  it("verifay navigation cross the pages", () => {
    onNavigationPage.formLayoutsPage();
    onNavigationPage.DatePickerPage();
    onNavigationPage.toasterPage();
    onNavigationPage.smartTablePage();
    onNavigationPage.tooltipPage();
  });

  it("should submit Inline form", () => {
    onNavigationPage.formLayoutsPage();
    onFormLayoutsPage.submetInlineFormWithNameAndEmail(
      "Khaled ",
      "khaledmohsenmoammed@gmaioil.com"
    );
  });

  it("should submit Basic form", () => {
    onNavigationPage.formLayoutsPage();
    onFormLayoutsPage.submetBassicFormWithNameAndEmail(
      "khaledledmohsenmohammed@gmail.com",
      "12345678"
    );
  });

  it("should select date from the datepicker and daterange", () => {
    onNavigationPage.DatePickerPage();
    onDatepickerPage.selectCommonDatepickerDateFromToday(2);
    onDatepickerPage.seleDatepicherWithRangeFromToday(1, 9);
  });

  it.only("smart table", () => {
    onNavigationPage.smartTablePage();
    onSmartTablePage.addNewRecordWithFirstAndLastName("Khaled", "Mohammed");
    onSmartTablePage.updateAgeByFirstName("Khaled", "30");
    onSmartTablePage.deleteRowByIndex(1);
  });

  it("should sunmit linear and basic form and date in calinder  ", () => {
    onNavigationPage.formLayoutsPage();
    onFormLayoutsPage.submetInlineFormWithNameAndEmail(
      "Khaled ",
      "khaledmohsenmoammed@gmaioil.com"
    );

    onFormLayoutsPage.submetBassicFormWithNameAndEmail(
      "khaledledmohsenmohammed@gmail.com",
      "12345678"
    );

    onNavigationPage.DatePickerPage();
    onDatepickerPage.selectCommonDatepickerDateFromToday(2);
    onDatepickerPage.seleDatepicherWithRangeFromToday(1, 9);
  });
});
