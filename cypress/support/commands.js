// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginClass from '../e2e/PageObjects/portal-login.cy'
const lp = new loginClass()



Cypress.Commands.add('login_with_password',(email, password) =>{
    
        lp.VisitSite()
        lp.ProfessionalTab()
        lp.Email(email)
        lp.Password(password)
        lp.LoginButton1()
})

Cypress.Commands.add("login_with_date",(nickname, date, month, day)=>{
        lp.VisitSite()
        lp.Nickname(nickname)
        lp.Year(date)
        lp.Month(month)
        lp.Day(day)
        lp.LoginButton()
})

import RegisterClass from '../e2e/PageObjects/register.cy'

const normalRegister = new RegisterClass()

Cypress.Commands.add("register1",(nickname, year, month, day, postal1, postal2, email)=>{
    normalRegister.Visit()
    normalRegister.Nickname(nickname)
    normalRegister.Gender()
    normalRegister.Year(year)
    normalRegister.Month(month)
    normalRegister.Day(day)
    normalRegister.Postal1(postal1)
    normalRegister.Postal2(postal2)
    normalRegister.Email(email)
    normalRegister.SubmitButton()
    
})