const { locTicketContact } = require("../../support/Features/D1/SG-Delivery/locate-test-ticket-client-contract.cy");
const { loginToDispatch } = require("../../support/Features/ValidD1Login")


describe('Navigate to the PO deliverables to be streamlined', () => {
    it('should verify that after clicking the PO Count it will redirect to PO deliverables', () => {

        loginToDispatch();
        locTicketContact();
        cy.contains('p', 'Summary') .scrollIntoView().realHover().click({ force: true }); 
        cy.get('form.ng-untouched > fieldflow-header > .header-wrapper > h1').should('be.visible');
        cy.get('.ng-untouched.ng-star-inserted > :nth-child(6)')
          
          .should('have.attr', 'href')
          .and('include', 'core.dispatch1.com/contracts/2706/tickets/244305/overview?poId=231443&tabName=deliverables');
        

    })
})