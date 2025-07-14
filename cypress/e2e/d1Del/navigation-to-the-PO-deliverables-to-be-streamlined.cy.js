const { locTicketContact } = require("../../support/Features/D1/SG-Delivery/locate-test-ticket-client-contract.cy");
const { loginToDispatch } = require("../../support/Features/ValidD1Login")


describe('Navigate to the PO deliverables to be streamlined', () => {
    it('should verify that after clicking the PO Count it will redirect to PO deliverables', () => {

        loginToDispatch();
        locTicketContact();
        cy.contains('p', 'Summary') .scrollIntoView().realHover().click({ force: true }); 
        cy.get('form.ng-untouched > fieldflow-header > .header-wrapper > h1').should('be.visible');
         
        const expectedUrl = 'https://core.dispatch1.com/contracts/2706/tickets/244258/overview?poId=231395&tabName=deliverables';

          cy.window().then((win) => {
          cy.stub(win, 'open').as('windowOpen');
            });

         cy.contains('td.link-style-text', '4/0').click({ force: true });
         cy.get('@windowOpen').should('be.calledWithMatch', /\/contracts\/2706\/tickets\/244258\/ticket-detail\/buy\?poId=231395&tabName=deliverables/);
       
        cy.get('@windowOpen').then((stub) => {
         const actualUrl = stub.getCall(0).args[0];
         console.log('🚀 Opened URL:', actualUrl); // Shows up in browser's DevTools console
         cy.log('window.open called with: ' + actualUrl);
        });    
    })
})