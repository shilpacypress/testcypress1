

import 'cypress-xpath'
describe("verify webtable scenarios",()=>{

    it("scenario 1",()=>{
        cy.visit('https://www.letskodeit.com/practice')
        // verify number of rows
        cy.xpath('//table[@class="table-display"]/tbody/tr').should('have.length','4');

        // verify number of columns
        cy.xpath('//table[@class="table-display"]/tbody/tr/th').should('have.length','3');
    })

// to go to  a particular row and get a cloumn text or value

it.only ('validate a row and get column value',()=>{


    cy.visit('https://www.letskodeit.com/practice')
    cy.xpath('//table[@class="table-display"]/tbody/tr[3]').within(()=>{

        cy.get('td').eq(2).then((data)=>{

            cy.log(data.text())
            expect(data.text()).to.equal("30")

        })
    })
})
it.only('using each loop',()=>{

cy.visit('https://www.letskodeit.com/practice')
cy.xpath('//table[@class="table-display"]').each((line)=>{

cy.get(line).contains('Javascript').parent().then((ele)=>{
    cy.get(ele).within(()=>{
        cy.get('td').eq(0).then((value)=>{
            cy.log(value.text())
        })
    })
})
})




})
    


        

      
          })

    



