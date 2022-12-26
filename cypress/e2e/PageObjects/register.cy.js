/// <reference types = "cypress" />

class RegisterClass{
    Visit(){
        cy.visit('https://qa-aeon.ekbana.info/register')
    }

    Nickname(value){
       const nickname =  cy.get('#normal-tab-pane > form > div:nth-child(3) > input')
       nickname.type(value)
       return this
        
    }
    Gender(){
        const gender = cy.get('#flexRadioDefault3')
        gender.click()
        return this
    }

    Year(value){
        const year = cy.get('.login-year')
        year.select(value)
        return this
    }

    Month(value){
        const month = cy.get('.login-month')
        month.select(value)
        return this
    }

    Day(value){
        const day = cy.get('.login-day')
        day.select(value)
        return this
    }

Postal1(value){
    const postal1 = cy.get('#normal-tab-pane > form > div:nth-child(6) > div > input.log-input.postalcode1')
    postal1.type(value)
    return this
}

Postal2(value){
    const postal2 = cy.get('#normal-tab-pane > form > div:nth-child(6) > div > input.log-input.postalcode2')
    postal2.type(value)
    return this
}

Email(value){
    const email = cy.get('#normal-tab-pane > form > div:nth-child(7) > input')
    email.type(value)
    return this
}

SubmitButton(){
    const button = cy.get('#normal-tab-pane > form > div.text-center > button')
    button.click()
    return this
}

}

export default RegisterClass
