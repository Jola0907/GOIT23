
export class tests {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login")
    }
    logowanieUserFirst() {
        cy.get("#user_email").type("user888@gmail.com");
        cy.get("#user_password").type("1234567890");
        cy.get('[type="submit"]').should('have.text', 'Log in').click();
    }

    logowanieUserSecond() {
        cy.get("#user_email").type("testowyqa@qa.team");
        cy.get("#user_password").type("QA!automation-1");
        cy.get('[type="submit"]').should('have.text', 'Log in').click();

    }

    menuStrony(){
        cy.get('[data-element-type="burger-menu"]').click();
    }
    logOut() {
        cy.get('[type="submit"]').should('have.text', 'Log out').click()
    }
}
