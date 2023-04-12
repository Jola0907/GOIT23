
//<reference types="cypress"/>


describe("firstTests", () => {
  it("Login check first", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.get('[type="submit"]').should('have.text', 'Log in').click();
    
    
    cy.get('[data-element-type="burger-menu"]').click();
    //cy.get("#open-navigation-menu-mobile").click();
    //cy.get(".css-bve2vl").click({ multiple: true });
      cy.get('[type="submit"]').should('have.text', 'Log out').click() ;
   });
  it("Login check second", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
    cy.get('[type="submit"]').should('have.text', 'Log in').click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get('.css-bve2vl').click({ multiple: true });

    })
 });
 

// describe('login', () => {
//   beforeEach(() => {
//     cy.visit('https://www.edu.goit.global/pl/account/login ' );
//     cy.login('user888@gmail.com', '1234567890');

// })

    //it('findEmail', () => {

        // cy,get('#pay_bills_tab > a').click();

        // cy.get('#sp_amount').type('100');
        // cy.get('#sp_date').type('2023-03-08');
        // cy.get('#sp_amount').click();

        // cy.get('#pay_saved_payees').click();
//})})