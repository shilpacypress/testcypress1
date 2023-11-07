describe('verifi api testing', () => {
    it('verify api testing', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').its('status').should('equal', 200);
    })

    it.only('verify post call', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            
            body: {
                "name": "morpheus",
                "job": "leader"
            }


        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('name', 'morpheus')
            expect(response.body).to.have.property('job', 'leader')
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('createdAt')




        })


    })

})

