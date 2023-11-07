const { describe } = require("mocha");

describe('verify post call',()=>{

    it('verify post call',()=>{
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                 "name": "morpheus",
            "job": "leader"
            }

            }).then((response)=>{
                expect(response.status).to.equal(201)
            })
        })
    })
