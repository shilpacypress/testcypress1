describe('verifi api testing',()=>{
it('verify api testing',()=>{
cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal',200);
})

it('verify post call',()=>{
cy.request({
    method:'POST',
    url:'https://jsonplaceholder.typicode.com/posts',
    body:{
        
    }
})

})
})