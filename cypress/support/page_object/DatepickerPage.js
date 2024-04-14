// this method is used to select the date from the current day
function sellectDateFromCruntDay(day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  let futureDay = date.getDate();
  let futureMonth = date.toLocaleString("default", { month: "short" });
  let dateAssert = `${futureMonth} ${futureDay}, ${date.getFullYear()}`;
  cy.get("nb-calendar-navigation")
    .invoke("attr", "ng-reflect-date")
    .then((dateAttribute) => {
      if (!dateAttribute.includes(futureMonth)) {
        cy.get('[data-name="chevron-right"]').click();
        this.sellectDateFromCruntDay(day);
      } else {
        cy.get(".day-cell").not(".bounding-month").contains(futureDay).click();
      }
    });
  return dateAssert;
}
export class DatepickerPage {
  selectCommonDatepickerDateFromToday(dayFromToday) {
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        let dateAssert = sellectDateFromCruntDay(dayFromToday);
        cy.wrap(input).invoke("prop", "value").should("contain", dateAssert);
      });
  }
  seleDatepicherWithRangeFromToday(firstDay, secondDay) {
    cy.contains("nb-card", "Datepicker With Range")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        let dateAssertFirst = sellectDateFromCruntDay(firstDay);
        let dateAssertSecond = sellectDateFromCruntDay(secondDay);
        const finalDate = `${dateAssertFirst} - ${dateAssertSecond}`;
        cy.wrap(input).invoke("prop", "value").should("contain", finalDate);
      });
  }
}
export const onDatepickerPage = new DatepickerPage();
