/// <reference types="cypress" />
//require('cypress-xpath')
describe('this is test code',()=>{
    it('this is a first test code',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('amazon{enter}')
        cy.get('//a').should('have.length',154)/
        

    })
      


})
  
