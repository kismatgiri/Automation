/// <reference types='cypress' />


describe('This is register page scenarios', ()=>{


    it('To verify that the user can register to the system', ()=>{
        cy.register1('kismat123','1900', '10', '5', '190', '0100', 'kismat123@gmail.com')
        cy.wait(5000)
        cy.url().should('eq','https://qa-aeon.ekbana.info/login')

    })
})
