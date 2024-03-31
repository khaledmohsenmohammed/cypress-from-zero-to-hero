const { onNavigationPage } = require("../support/page_object/navigationPage");

describe("Test with Page Objects", () => {
  // Page Object
  //the beforeEach() function is called before each test in the describe block
  beforeEach(() => {
    cy.visit("/");
  });
  it("verifay navigation cross the pages", () => {
    onNavigationPage.formLayoutsPage();
    onNavigationPage.formDatePickerPage();
    onNavigationPage.formModalAbdOverlayspage();
  });
});
