
/// <reference types="cypress" />
describe('alerts scenarios',()=>{
    it('verify alerts',()=>{
cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//cy.get('button[onclick="jsAlert()"]').click();
//cy.on('window:alert',(t)=>{
    //expect(t).to.contains('I am a JS Alert');
    //cy.get('button[onclick="jsConfirm()"]').click();
    //cy.on('window:confirm',(t)=>{
        //expect(t).to.contains('I am a JS Confirm');
        //cy.on('window:confirm',()=> false);
        //cy.get('p[id="result"]').contains("You clicked: Cancel");
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.on('window:prompt', (text, welcome) => {
            return 'welcome';
            cy.get('p[id="result"]').contains("You entered: welcome");

    })
    
})


    })
