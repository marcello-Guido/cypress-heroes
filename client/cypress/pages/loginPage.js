class LoginPage {

    selectorsList() {
        const selectors = {
            loginButton: "li > .undefined",
            emailField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            siginButton: '.bg-blue-700',
            logoutButton: 'nav > .flex > :nth-child(2) > .undefined',
            logoutUserButton: 'li > .undefined',
            alertMessageLogin: '.text-red-500',
        }
        return selectors
    }

    accessPage() {
        cy.visit('/heroes')
    }

    loginAdmin(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        // Checking if the page has admin permissions
        cy.get('a > .undefined').should('be.visible')

    }

    logoutAdmin(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        // Checking if the page has admin permissions
        cy.get('a > .undefined').should('be.visible')

        // Logout click
        cy.get(this.selectorsList().logoutButton).click()
    }

    loginUser(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        // Checking if the page don't have admin permissions
        cy.get('a > .undefined').should('not.exist')
    }

    logoutUser(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        // Checking if the page don't have admin permissions
        cy.get('a > .undefined').should('not.exist')

        // click to logout
        cy.get(this.selectorsList().logoutUserButton).click()
    }


    loginWrPass(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        //Checking wrong password
        cy.get(this.selectorsList().alertMessageLogin).should('be.visible') // Checking without checking if are using the right alert message
    }

    loginWrEmail(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        //Checking wrong password
        cy.get(this.selectorsList().alertMessageLogin).should('be.visible') // Checking without checking if are using the right alert message
    }

    emptyFields(){
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).click()
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().siginButton).click()

        //Checking empty password
        cy.get(this.selectorsList().alertMessageLogin).should('be.visible') // Checking the alert message
    }

    emptyPass(email) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().siginButton).click()

        //Checking empty password
        cy.get(this.selectorsList().alertMessageLogin).should('have.text', 'Password is required') // Checking the exactly message
    }

    emptyEmail(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        //Checking empty email
        cy.get(this.selectorsList().alertMessageLogin).should('have.text', 'Email is required') // Checking the exactly message
    }

    loginIncorrect(email, password) {
        cy.get(this.selectorsList().loginButton).click()

        // Checking if the login pop-up appeared
        cy.get('.modal-container > .open').should('be.visible')

        // Writing the email and password
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().siginButton).click()

        //Checking credentials
        cy.get(this.selectorsList().alertMessageLogin).should('have.text', 'Invalid email or password') // Checking the exactly message
    }

    

}

export default LoginPage