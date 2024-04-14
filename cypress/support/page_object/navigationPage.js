// this is the method to navigate to the form layout page
function selectGropManuItems(gropeName) {
  //this to check if the menu is expanded or not
  cy.contains("a", gropeName).then((menu) => {
    // Logging the entire HTML element as a string
    //cy.log(menu[0].outerHTML);
    cy.wrap(menu)
      .find(".expand-state g g")
      .invoke("attr", "data-name")
      .then((value) => {
        // Log the value of the data-name attribute
        cy.log(`Data-Name attribute value: ${value}`);
        if (value.includes("left")) {
          cy.wrap(menu).click();
        }
      });
  });
}
//class to navigate to the different pages
export class NavigatioPage {
  formLayoutsPage() {
    selectGropManuItems("Forms");
    cy.contains("Form Layouts").click(); // this will click on the form layouts link
  }

  DatePickerPage() {
    selectGropManuItems("Forms");
    cy.contains("Datepicker").click(); // this will click on the Datepicker link
  }

  toasterPage() {
    selectGropManuItems("Modal & Overlays");
    cy.contains("Toastr").click(); // this will click on the Modal & Overlays link
  }

  smartTablePage() {
    selectGropManuItems("Tables & Data");
    cy.contains("Smart Table").click(); // this will click on the Smart Table link
  }

  tooltipPage() {
    selectGropManuItems("Modal & Overlays");
    cy.contains("Tooltip").click(); // this will click on the Modal & Overlays link
  }
}
//this is the object of the class
export const onNavigationPage = new NavigatioPage();
