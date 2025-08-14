const { loginToDispatch } = require("../../support/Features/ValidD1Login");

describe('', () => {
    it('', () => {
        loginToDispatch();
        cy.get('.sidebar').scrollIntoView().realHover();
        cy.contains('div.label', 'Vendors').click();
        cy.xpath("//button[normalize-space()='Add Vendor']").realHover();
        // cy.xpath("//h3[normalize-space()='Vendors List']").click({ force: true });
        // cy.realPress('Tab');
        // cy.focused().type('testMatDisregard', { force: true });
          
        cy.xpath("//input[@placeholder='Search Name...']").type('testMatDisregard');
        cy.xpath("//a[normalize-space()='testMatDisregard']").click();

        cy.xpath("//p[normalize-space()='Documents']").click();

        cy.xpath("//button[normalize-space()='Add Document']").click();
        cy.xpath("//mat-icon[@type='button']").click();
        cy.wait(10000);
        cy.xpath("//button[normalize-space()='Add Document']").click();
        cy.get('.row > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').type('test');
        cy.realPress('Tab')          // Simulate Tab key
        cy.realPress('Enter');       // Simulate Enter key
        cy.realPress('ArrowDown');   // Simulate Arrow Down key
        cy.realPress('Enter'); 
        cy.realPress('Tab')
        cy.get('.col-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('test'); 
        const fileName = 'SampleClientSites (6).xlsx';
        cy.get('.cds--file > .cds--btn').attachFile(fileName);

        cy.xpath("//button[normalize-space()='Save']").click();

    })
});