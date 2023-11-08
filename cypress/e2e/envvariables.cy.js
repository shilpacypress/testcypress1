const cypress = require("cypress");
const { describe } = require("mocha");

describe('verify base url',()=>{
    it('verify the testcase',()=>{
cy.visit(Cypress.env("baseurl"))
    })
})
