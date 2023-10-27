describe('verify login',()=>{
    it('verify using fixtures',()=>{
cy.fixture('login.json').then((data)=>{



cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get('input[name="username"]').type(data.username);
cy.get('input[type="password"]').type(data.password);
cy.get('button[type="submit"]').click();
cy.contains('Dashboard').should('be.visible');
})

    })

    it.only ('verify using mic of test data',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('login.json').then((data)=>{
            data.forEach((userdata)=>{

cy.get('input[name="username"]').type(userdata.username);
cy.get('input[type="password"]').type(userdata.password);


if(userdata.username=="Admin"&& userdata.password=="admin123")
{
    cy.get('button[type="submit"]').click();
    cy.contains("Dashboard").should('be.visible')
    cy.get('p.oxd-userdropdown-name').click();
    cy.get('a[role="menuitem"]').eq(3).click();
    cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

}
else{
    cy.contains("Invalid credentials").should('be.visible')
}
})
            })





            })




        })







    

