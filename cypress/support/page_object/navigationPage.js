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

export class NavigatioPage {
  formLayoutsPage() {
    selectGropManuItems("Forms");
    cy.contains("Form Layouts").click(); // this will click on the form layouts link
  }
  // this is the method to navigate to the date picker page
  formDatePickerPage() {
    selectGropManuItems("Forms");
    cy.contains("Datepicker").click(); // this will click on the Datepicker link
  }

  // this is the method to navigate to the form modal and overlays page
  formModalAbdOverlayspage() {
    selectGropManuItems("Modal & Overlays");
    cy.contains("Toastr").click(); // this will click on the Modal & Overlays link
  }
}

export const onNavigationPage = new NavigatioPage();
