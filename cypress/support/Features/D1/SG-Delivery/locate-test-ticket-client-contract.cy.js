export function locTicketContact() {

      cy.get('.sidebar').scrollIntoView().realHover();
        cy.contains('div.label', 'Delivery').click();
        cy.get('#mat-input-0').clear().type('test');
        cy.contains('div.label', 'Test Client (USE FOR TESTING)').click();
        cy.contains('div.heading', 'FSDP-24-2706').click();
        cy.get('#mat-input-2').clear().type('244258');
        cy.contains('div.heading', 'FSDP-2706-244258').click();
        cy.wait(5000);
}