import { loginToDispatch } from "../../support/Features/ValidD1Login"

describe('verify associate display names with contract/proposal level activities', () => {
  it('should verify the save button enables when updating is valid and disabled it back if the update is reverted', () => {
    loginToDispatch()
      cy.get('.sidebar > :nth-child(3) > :nth-child(1)').click({force:true})
      cy.wait(5000);
      cy.contains('a', '786').click();
      cy.wait(5000);
      cy.contains('a', 'test').click();
      cy.wait(5000);
      cy.get(':nth-child(1) > [headers="table-header-0-1-12"] > .displayname-input').type('e');
      cy.get('.custom-h1').click();
      cy.wait(5000);
      cy.get('[style="margin-left: 3px;"]').should('be.enabled');
      cy.get(':nth-child(1) > [headers="table-header-0-1-12"] > .displayname-input').type('{backspace}');
      cy.get('.custom-h1').click();
      cy.wait(5000);
      cy.get('.disable-save-button').should('have.css', 'pointer-events', 'none');                         //If only CSS disables it (harder to assert but can check style):
      cy.get(':nth-child(1) > [headers="table-header-0-1-12"] > .displayname-input').type('e');
      cy.get('.custom-h1').click();
      cy.get('[style="margin-left: 3px;"]').click();
      cy.get('[buttontype="primary"] > .primary').click();
      cy.wait(5000);
      cy.get(':nth-child(1) > [headers="table-header-0-1-12"] > .displayname-input').type('{backspace}');
      cy.get('.custom-h1').click();
      cy.get('[style="margin-left: 3px;"]').click();
      cy.get('[buttontype="primary"] > .primary').click();
      cy.get('#toast-container', { timeout: 5000 })
          .should('be.visible')
          .and('contain.text', 'Activity updated successfully');

      
    

  })
}) 