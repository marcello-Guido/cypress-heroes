class LoginPage {
    selectorsList() {
        const selectors = {
            emailField: "[data-cy='email']",
            passwordField: "[data-cy='password']",
            loginButton: "li > .undefined",
            signinButton: '.bg-blue-700',

        }
        return selectors
    }
    acessLoginPage() {
        cy.visit('/heroes')

    }
    loginButtom() {
        cy.get(this.selectorsList().loginButton).click()
    }

    loginAdmin(adminEmail, adminPass) {
        cy.get(this.selectorsList().emailField).clear()
        cy.get(this.selectorsList().emailField).type(adminEmail)
        cy.get(this.selectorsList().passwordField).clear()
        cy.get(this.selectorsList().passwordField).type(adminPass)
        cy.get(this.selectorsList().signinButton).click()
    }

    loginUser(userEmail, userPass) {
        cy.get(this.selectorsList().emailField).clear()
        cy.get(this.selectorsList().emailField).type(userEmail)
        cy.get(this.selectorsList().passwordField).clear()
        cy.get(this.selectorsList().passwordField).type(userPass)
        cy.get(this.selectorsList().signinButton).click()
    }

    errorMessage(){
        cy.get('.text-red-500').should('be.visible')
    }

    errorEmailEmpty(){
        cy.get('.text-red-500').should('contain.text', 'Email is required');

    }

    loginAdminEmpty(userEmail){
        cy.get(this.selectorsList().emailField).clear()
        cy.get(this.selectorsList().emailField).type(userEmail)
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().signinButton).click()
    }

    loginEmpty(){
        cy.get(this.selectorsList().emailField).click()
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().signinButton).click()
    }

    errorPasswordEmpty(){
         cy.get('.text-red-500').should('contain.text', 'Password is required');
    }


    logoutAdmin(){
        this.loginAdmin('admin@test.com', 'test123')
        cy.get('nav > .flex > :nth-child(2) > .undefined').click()

        cy.location('pathname').should('eq', '/heroes');
    }

    logoutUser(){
        this.loginUser('test@test.com', 'test123')
        cy.get('li > .undefined').click()

        cy.location('pathname').should('eq', '/heroes');
    
    }


}

export default LoginPage;