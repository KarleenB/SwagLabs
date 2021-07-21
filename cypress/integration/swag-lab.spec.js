/// <reference types="cypress" />

import { SwagLabsPage } from "../page-objects/swagLabs-page"


describe('Login Actions', function () {
    const swagPage = new SwagLabsPage()

    beforeEach( function () {
        swagPage.navigate()
    })

    it('Successful Login', function () {
        swagPage.login("standard_user")
    
        swagPage.validateAppLogo()    

        swagPage.validateMainPage('https://www.saucedemo.com/inventory.html')
    })
    
    it('Failed Login', function () {
        swagPage.login("locked_out_user")

        swagPage.validateErrorMessage('Sorry, this user has been banned')
    })
})

