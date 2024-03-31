/// <reference types="cypress" />

describe("my first test suite", () => {
  it("my first test case", () => {
    // test step
    //navigate to the url
    cy.visit("/"); // this will navigate to the base url in cypress.configration.js file
    cy.contains("Forms").click(); // this will click on the forms link
    cy.contains("Form Layouts").click(); // this will click on the form layouts link

    // how to ficd the locators by tagname
    cy.get("input");

    // how to fix the locators by id
    cy.get("#inputEmail1");

    // how to fix the locators by class name
    cy.get(".input-full-width");

    // how to fix the locators by attribute name
    cy.get("[fullwidth]");

    // how to fix the locators by attribute name and value
    cy.get("[placeholder='Email']");

    //how to find by entering css value
    cy.get("[class='input-full-width size-medium shape-rectangle']");

    //how to find by two different attributes
    cy.get("[placeholder='Email'][fullwidth]");

    //how to find by tagname and attribute id and class
    cy.get("input[placeholder='Email']#inputEmail1.input-full-width"); // this is the best way to find the locators

    //how to find by cypress test ID
    cy.get("[data-cy='imputEmail1']");
  });

  it("my second test case", () => {
    // test step
    //navigate to the url
    cy.visit("/"); // this will navigate to the base url in cypress.configration.js file
    cy.contains("Forms").click(); // this will click on the forms link
    cy.contains("Form Layouts").click(); // this will click on the form layouts link

    //theory
    /*
     get() - find the element on the page by locators globally
     find() - find the chiled element by locators locally   
     contains() - find the element by text in the page by html  
    */
    //exsample of contains() method
    cy.contains("Sign in"); //contains() method  find the eletment by text in the page by html only the first element and egnore the all other elements
    cy.contains("[status='warning']", "Sign in"); //contains() method  find the eletment by text in the page by html only the first element and egnore the all other elements
    cy.contains("nb-card", "Horizontal form").find("button"); //find() method find the chiled element by locators locally
    cy.contains("nb-card", "Horizontal form").find("[type='email']"); //find() method find the chiled element by locators locally
    cy.contains("nb-card", "Horizontal form").contains("Sign in");
    cy.contains("nb-card", "Horizontal form").get("button");

    //cypress chains
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parent("form")
      .find("nb-checkbox")
      .click();
  });

  it("save subject of the command", () => {
    // test step
    //navigate to the url
    cy.visit("/"); // this will navigate to the base url in cypress.configration.js file
    cy.contains("Forms").click(); // this will click on the forms link
    cy.contains("Form Layouts").click(); // this will click on the form layouts link

    //save the subject of the command

    /*  
    1 - cypress alias - save the subject of the command 
    2- cypress then() method - save the subject of the command
    */

    //1- cypress alias
    TheGridcy.contains("nb-card", "Using the Grid").as("using"); // this will save the subject of the command called usingTheGrid
    cy.get("@usingTheGrid") //  this will find the element by text in the page by html
      .find("[for='inputEmail1']")
      .should("contain", "Email");

    cy.get("@usingTheGrid") // this will find the element by text in the page by html
      .find("[for='inputPassword2']")
      .should("contain", "Password");

    // 2- cypress then() method - save the subject of the command
    cy.contains("nb-card", "Using the Grid").then((usingTheGrid) => {
      // Wraps the 'usingTheGrid' object to allow chaining of Cypress commands.
      // Then, it finds an element with the attribute 'for' equal to 'inputEmail1'.
      // Finally, it asserts that the found element should contain the text 'Email'.
      cy.log("*****************" + usingTheGrid);
      cy.wrap(usingTheGrid)
        .find("[for='inputEmail1']")
        .should("contain", "Email");

      cy.wrap(usingTheGrid)
        .find("[for='inputPassword2']")
        .should("contain", "Password");
    });
  });
  it.only("save subject of the command (2)", () => {
    // test step
    //navigate to the url
    cy.visit("/"); // this will navigate to the base url in cypress.configration.js file
    cy.contains("Forms").click(); // this will click on the forms link
    cy.contains("Form Layouts").click(); // this will click on the form layouts link

    //save the subject of the command
    // 1- cypress alias
    cy.contains("nb-card", "Using the Grid").as("usingTheGrid");
    cy.log("@usingTheGrid"); // this will save the subject of the command called usingTheGrid
    cy.get("@usingTheGrid") //  this will find the element by text in the page by html
      .find("[for='inputEmail1']")
      .should("contain", "Email");
    cy.get("@usingTheGrid")
      .find("[for='inputPassword2']")
      .should("contain", "Password");

    // 2- cypress then() method - save the subject of the command
    cy.contains("nb-card", "Using the Grid").then((using_Grid) => {
      cy.log("*****************", using_Grid); // Wraps the 'usingTheGrid' object to allow chaining of Cypress commands.
      cy.wrap(using_Grid)
        .find("[for='inputEmail1']")
        .should("contain", "Email");
    });
  });

  it("exstract text values", () => {
    // test step
    //navigate to the url
    cy.visit("/"); // this will navigate to the base url in cypress.configration.js file
    cy.contains("Forms").click(); // this will click on the forms link
    cy.contains("Form Layouts").click(); // this will click on the form layouts link
    //1
    cy.get("[for='exampleInputEmail1']").should("contain", "Email address");
    //2 - get the text of the element
    cy.get("[for='exampleInputEmail1']").then((label) => {
      const labelText = label.text(); //this is jquery method to get the text of the element by using text() method
      expect(labelText).to.equal("Email address"); // this is the assertion to check the text of the element
      cy.wrap(label).should("contain", " address"); // this is the assertion to check the text of the element by using cypress wrap method to wrap the elements
      cy.get("[for='exampleInputEmail1']")
        .invoke("text")
        .should("contain", "Email address"); // this is the assertion to check the text of the element by using cypress invoke method to get the text of the element

      //how to validate the elementc class attribute has the value label
      //1
      cy.get("[for='exampleInputEmail1']")
        .invoke("attr", "class")
        .should("contain", "label");

      //2
      // This code is using Cypress commands to interact with a web page.
      // The 'cy.get()' command is used to get the DOM element with the attribute 'for' equal to 'exampleInputEmail1'.
      // The 'then()' command is used to handle the returned jQuery object, which is the selected DOM element.
      // Inside the 'then()' command, an assertion is made using 'expect()' to check if the 'class' attribute of the selected element contains the string 'label'.
      cy.get("[for='exampleInputEmail1']").then((label) => {
        expect(label.attr("class")).to.contain("label");
      });

      //how to tyoe the text in the input field
      cy.get("#exampleInputEmail1").type("khaled@test.com");
      // The 'cy.get()' command is used again to get the same DOM element.
      // The 'invoke()' command is used to get the 'value' property of the selected input field.
      // The 'should()' command is then used to assert that the value of the input field should contain the string 'khaled'.
      cy.get("#exampleInputEmail1")
        .invoke("prop", "value")
        .should("contain", "khaled")
        .then((value) => {
          expect(value).to.equal("khaled@test.com");
        });
    });
  });

  it("radio button", () => {
    // test step
    //navigate to the url
    cy.visit("/"); // this will navigate to the base url in cypress.configration.js file
    cy.contains("Forms").click(); // this will click on the forms link
    cy.contains("Form Layouts").click(); // this will click on the form layouts link

    //radio button
    cy.contains("nb-card", "Using the Grid")
      .find("[type='radio']")
      .then((radioButtons) => {
        // The 'cy.wrap()' command is used to wrap the 'radioButtons' object to allow chaining of Cypress commands.
        // The 'eq()' command is used to get the first element in the wrapped set.
        // The 'check()' command is then used to check the selected radio button.
        // The option '{ force: true }' is used to force the action, bypassing Cypress's actionability checks.
        cy.wrap(radioButtons).eq(0).check({ force: true }); // this will check the radio button by using cypress wrap method to wrap the elements and eq() method to select the element by index and check() method to check the radio button
        cy.wrap(radioButtons).eq(1).should("not.be.checked"); // this will check the radio button by using cypress wrap method to wrap the elements and eq() method to select the element by index and check() method to check the radio button
        cy.wrap(radioButtons).eq(2).should("be.disabled"); // this will check the radio button by using cypress wrap method to wrap the elements and eq() method to select the element by index and check() method to check the radio button
        cy.wrap(radioButtons).eq(1).check({ force: true }); // this will check the radio button by using cypress wrap method to wrap the elements and eq() method to select the element by index and check() method to check the radio button
      });
  });
  it("chekebox", () => {
    // test step
    cy.visit("/"); // this will navigate to the base url in cypress.configration.js file
    cy.contains("Modal & Overlays").click(); // this will click on the forms link
    cy.contains("Toastr").click(); // this will click on the form layouts link

    //checkbox
    cy.get("[type='checkbox']").check({ force: true }); // this will be get all the checkbox elemint have attripute type=checkbox and the element have the attribute type=checkbox will cheake ir
    cy.get("[type='checkbox']").uncheck({ force: true }); // this will be get all the uncheck elemint have attripute type=checkbox
    cy.get("[type='checkbox']").eq(0).check({ force: true }); //this will find all the elements have the attribute type=cheakebox and get elment number 0 and check it
    cy.get("[type='checkbox']").eq(2).check({ force: true }); //this will find all the elements have the attribute type=cheakebox and get elment number 2 and check it
    cy.get("[type='checkbox']").eq(0).click({ force: true }); // the click() method is used to click on the selected checkbox element. without take the checkbox value true or false
  });
});
