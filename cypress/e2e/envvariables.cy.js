const { describe } = require("mocha");

describe('verify base url',()=>{
    it('verify the testcase',()=>{
cy.visit(cypress.env("baseurl"))
    })
})