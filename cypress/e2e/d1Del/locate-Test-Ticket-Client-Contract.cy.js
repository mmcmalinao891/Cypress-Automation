const { loginToDispatch } = require("../../support/Features/ValidD1Login")

describe('Navigate Test Ticket on a Contract', () => {
    it('Should Locate Test Ticket on Client Contract', () => {
        loginToDispatch()
        cy.get('.sidebar').scrollIntoView().realHover();
        //cy.get('.sidebar > :nth-child(4)').scrollIntoView().trigger('mouseover', { force: true });
        cy.contains('div.label', 'Delivery').click();
        cy.get('#mat-input-0').type('test');
        cy.contains('div.label', 'Test Client (USE FOR TESTING)').click();
        cy.contains('div.heading', 'FSDP-24-2706').click();
        cy.contains('div.heading', 'FSDP-2706-244054').click();
        cy.contains('p', 'Summary') .scrollIntoView().realHover().click({ force: true }); 
        cy.wait(5000);
        

    })
})