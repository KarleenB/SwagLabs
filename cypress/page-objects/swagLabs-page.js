export class SwagLabsPage {
    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    login(username) {
        cy.get('[data-test=username]').type(username)
    
        cy.get('[data-test=password]').type("secret_sauce")
    
        cy.get('[data-test=login-button]').click()
    }

    validateAppLogo() {
        cy.get('.app_logo').should('be.visible')
    }

    validateMainPage(webAddress) {
        cy.url().should('be.equal', webAddress)
    }

    validateErrorMessage(expectedText) {
        cy.get('[data-test=error]').should('contain.text', expectedText)
    }
}