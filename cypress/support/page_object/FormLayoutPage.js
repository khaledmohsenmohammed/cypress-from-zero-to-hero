export class FormLayoutsPage {
  submetInlineFormWithNameAndEmail(nameInput, emailInput) {
    cy.contains("nb-card", "Inline form")
      .find("form")
      .then((form) => {
        cy.wrap(form).find('[placeholder="Jane Doe"]').type(nameInput);
        cy.wrap(form).find('[placeholder="Email"]').type(emailInput);
        cy.wrap(form).find('[type="checkbox"]').check({ force: true });
        cy.wrap(form).submit(); // this will submit the form ony if the form has a submit button
      });
  }

  submetBassicFormWithNameAndEmail(emailInput, passInput) {
    cy.contains("nb-card", "Basic form")
      .find("form")
      .then((form) => {
        cy.wrap(form).find('[placeholder="Email"]').type(emailInput);
        cy.wrap(form).find('[placeholder="Password"]').type(passInput);
        cy.wrap(form).find('[type="checkbox"]').check({ force: true });
        cy.wrap(form).submit(); // this will submit the form ony if the form has a submit button
      });
  }
}
export const onFormLayoutsPage = new FormLayoutsPage();
