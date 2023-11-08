describe('verify post cases',()=>{
    it('verify post cases',()=>{

const details={ // as this is a json object we should not add double quotes to the properties inside

    
        email: "eve.holt@reqres.in",
        password: "cityslicka"

}

cy.request({
    method:'POST',
    url: 'https://reqres.in/api/login',
    body:'details'
}).then((response)=>{

    expect(response.status).should('eq',201)
    expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4')
})


    })

/*============================
to run the script in commandline use the command npx cypress run --spec (copy replative path) and hit enter */

it('verify another post api',()=>{
const details=
    {
        name: "morpheus",
        job: "leader"
    }

cy.request(
    {
    method:'POST',
    url:'https://reqres.in/api/users',
    body:details
})
.then((response)=>{
    expect(response.status).to.eq(201)
    expect(response.body.name).to.eq(morpheus)
    expect(response.body.job).to.eq(leader)
    expect(response.body.id).should(exist)
    expect(response.body.CreatedAt).should(exist)
})
})

/*===================Another Approach--using fixtures=================*/


it.only('verify another post api using fixture',()=>{
    cy.fixture('create.json').then((data)=>{
        const details=data;
        cy.request(
            {
            method:'POST',
            url:'https://reqres.in/api/users',
            body:details
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(details.name)
            expect(response.body.job).to.eq(details.job)
            expect(response.body.id).should(exist)
            expect(response.body.CreatedAt).should(exist)
        })
    })
    
     
})
})   
//.......................................



