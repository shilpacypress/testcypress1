
/// <reference types="cypress" />

describe('verify sauce lab case',()=>{
it ('verify the login',()=>{
let login=["standard_user","secret_sauce","locked_out_user","problem_user","performance_glitch_user","error_user","visual_user"]
cy.visit('https://www.saucedemo.com/',{timeout:10000})
cy.get('input[placeholder="Username"]').type(login[0])
cy.get('input[placeholder="Password"]').type(login[1])

})

describe('verify', () => {
    it('verify', () => {

        // cy.visit("www.makemytrip.com")
        cy.visit("https://www.saucedemo.com")

        const userNames = [
            "standard_user", "secret_sauce", "locked_out_user", "problem_user",
            "performance_glitch_user", "error_user", "visual_user"]


        for (let $name of userNames) {
            cy.get('input[placeholder="Username"]').type($name)
            cy.get('input[placeholder="Password"]').type("secret_sauce")

        }

        for (let i = 0; i < userNames.length; i++) {
            cy.get('input[placeholder="Username"]').type($name)
            cy.get('input[placeholder="Password"]').type("secret_sauce")

        }

    })

})



})