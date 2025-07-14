 import { locTicketContact } from "./locate-test-ticket-client-contract.cy";

export function dlvrblsBulkUpld() {

 // Login and navigate to the target ticket      
        locTicketContact();
        cy.contains('p', 'Buy').click({ force: true });

        cy.xpath("//a[normalize-space()='231395']")
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });

        // Open Deliverables tab and Upload modal
        cy.xpath("//button[@id='n-tab-3-header']").click();
        cy.xpath("//button[normalize-space()='Upload Deliverable']").click({ force: true });

        // Attach files using drag and drop
        cy.xpath("//div[@class='drag-area']")
            .attachFile(['SampleClientSites (6).xlsx', 'ClientSiteInfo (1).xlsx'], { subjectType: 'drag-n-drop' });

        // Fill out form fields after file upload
        cy.xpath("//button[normalize-space()='Next']").click();

        cy.get(':nth-child(1) > .form-row > .file-card > .content > [style="display: flex;"] > [style="width: 1000%;"] > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('testComment');
        cy.get(':nth-child(2) > .form-row > .file-card > .content > [style="display: flex;"] > [style="width: 1000%;"] > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('testTest');

        // Submit the upload
        cy.get(':nth-child(2) > .primary').click();

        // Assert upload success
        cy.xpath('//div[@aria-label="Deliverables are successfully added."]')
            .should('be.visible')
            .and('contain', 'Deliverables are successfully added.');

        // Delete first deliverable
        deleteDeliverableByRow(1);

        // Delete second deliverable
        deleteDeliverableByRow(2);

        // Wait and close modal/dialog
        cy.wait(5000);
        cy.get('#icon-btn-2').click();

}

function deleteDeliverableByRow(rowNumber) {
    cy.get(`:nth-child(${rowNumber}) > [headers="table-header-0-7-5"] [buttonstyle="danger"] button .mat-icon`).click();
    cy.get(':nth-child(8) cds-overlay .cds--modal-container ibm-modal-footer .cds--modal-footer .cds--btn--danger').click();
    cy.xpath('//div[@aria-label="Deleted Successfully"]', { timeout: 5000 })
        .should('be.visible')
        .and('contain.text', 'Deleted Successfully');
}