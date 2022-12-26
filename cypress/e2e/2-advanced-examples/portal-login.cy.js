/// <reference types = "cypress" />

import loginClass from '../PageObjects/portal-login.cy'

describe("Login page scenariosfor individual and professional users", ()=>{

    it('To verify the login with valid nickname and valid dob', ()=>{
        cy.login_with_date('aeon11', '1905', '5', '5')
        cy.wait(5000)
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/')
        
    })

    it('To verify the login with valid nickname and invalid dob', ()=>{
        cy.login_with_date('aeon11', '1906', '5', '5')

        cy.wait(5000)
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/login')
        
    })

    it('To verify the login with invalid nickname and invalid dob', ()=>{
      cy.login_with_date("aeon111", '1905', '5', '10')

        cy.wait(5000)
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/login')
        
    })

    it('To verify the login with invalid nickname and valid dob', ()=>{
        cy.login_with_date('hafj','1905','5','5')

        cy.wait(5000)
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/login')
        
    })

    it.only('To verify the professional login with valid email and password', ()=>{
        cy.login_with_password('mrbusiness@gmail.com','Password@123')
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/')
    })

    it.only('To verify the professional login with valid email and invalid password', ()=>{
        cy.login_with_password('mrbusiness@gmail.com','Passworwd@123')
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/')
    })

    it.only('To verify the professional login with invalid valid email and valid password', ()=>{
        cy.login_with_password('mrbusiwness@gmail.com','Password@123')
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/')
    })

    it.only('To verify the professional login with invalid email and invalid password', ()=>{
        cy.login_with_password('mrbusinwess@gmail.com','Passwowrd@123')
        cy.url().should('eq', 'https://qa-aeon.ekbana.info/')
    })

})