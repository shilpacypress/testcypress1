
/// <reference types="cypress" />

describe('verify sauce lab case',()=>{
it ('verify the login',()=>{
let login=["standard_user","secret_sauce","locked_out_user","problem_user","performance_glitch_user","error_user","visual_user"]
cy.visit('https://www.saucedemo.com/',{timeout:10000})
cy.get('input[placeholder="Username"]').type(login[0])
cy.get('input[placeholder="Password"]').type(login[1])
cy.get('input#login-button').click();

})





})