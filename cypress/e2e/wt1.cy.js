import 'cypress-xpath'
describe('wt scenario 1',()=>{

it('wt sce 1',()=>{



cy.visit('https://testautomationpractice.blogspot.com/')
cy.xpath('//table[@name="BookTable"]/tbody/tr[4]').within(()=>{
cy.get('td').eq(1).then((value)=>{
    cy.log(value.text())
    expect(value.text()).to.equal("Animesh")
})

})

})

})



