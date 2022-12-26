/// <reference types ="cypress" />

class LoginPage
{
    VisitSite(){
        cy.visit("https://qa-aeon.ekbana.info/login")
    }

    Nickname(value){
        const nickname = cy.get('input[name="username"]')
        nickname.click()
        nickname.type(value)
        return
    }

    Year(value){
        const year = cy.get('#year')
        year.select(value)
        return year
    }

    Month(value){
        const month = cy.get('#month')
        month.select(value)
        return month
    }

    Day(value){
        const day = cy.get('.login-day')
        day.select(value)
        return day
    }

    LoginButton(){
        const loginButton = cy.get('#loginSubmit')
        loginButton.click()
        return
    }

    ProfessionalTab(){
        const tab = cy.get('#professional-tab')
        tab.click()
        return this
    }

    Email(value){
        const email=cy.get('input[name="email"]')
       
        email.type(value)
        return this
    }

    Password(value){
        const password=cy.get("input[placeholder='パスワードを入力']")
        
        password.type(value)
        return this
    }
    LoginButton1(){
       const loginButton1 =cy.get('#professional-tab-pane #loginSubmit')
       loginButton1.click()
       return this
    }
    
    

}
export default LoginPage
