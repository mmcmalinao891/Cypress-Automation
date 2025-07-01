const { locTicketContact } = require("../../support/Features/D1/SG-Delivery/locate-test-ticket-client-contract.cy");
const { loginToDispatch } = require("../../support/Features/ValidD1Login")


describe('', () => {
    it('', () => {

        loginToDispatch();
        locTicketContact();
        cy.contains('p', 'Summary') .scrollIntoView().realHover().click({ force: true }); 

    })
})