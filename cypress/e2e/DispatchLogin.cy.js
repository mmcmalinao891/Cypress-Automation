import { Credentials, Urls } from "../support/StepGroups";

describe('Valid Login', () => {
  it('should proceed on dashboard', () => {
    cy.visit(Urls.Dispatch1Url);

    cy.get('.btn.signin-btn').click();

    cy.origin(Urls.DispatchB2cUrl, {
    args: {
      email: Credentials.email,
      pass: Credentials.pass
      }
       }, ({ email, pass }) => {
        cy.get("input[id='email']").type(email);
        cy.get("input[id='password']").type(pass);
        cy.get('#next').click();
        cy.wait(100);
        });

          cy.wait(10000);
          cy.url().should('eq', Urls.D1DashBoardUrl);
    
  })

}) 



  