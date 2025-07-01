import { loginToDispatch } from "../support/Features/ValidD1Login"

describe('first test', () => {
  it('should select in drop down list', () => {
    loginToDispatch()
    //cy.contains('h3', 'Filters & Search').click().trigger('{tab}').trigger('{tab}').trigger('{enter}').type('Ticket Title').trigger('{enter}')
    //cy.get('.ng-select-container').click().clear().type("Ticket", {delay:200})
    //cy.get('input[placeholder="Select Field"]').should('exist').click()
    cy.get('.search-field > .ng-select-searchable > .ng-select-container').click().clear().type("Ticket", {delay:200})

  })
}) 