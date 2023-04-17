export class homeStr {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login")
    }
     logOut() {
        
        cy.get('[type="submit"]').should('have.text', 'Log out').click()
    
}}
