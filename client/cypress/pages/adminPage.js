import 'cypress-file-upload';

class AdminPage {

    selectorsList() {
        const selectors = {
            createHeroButton: 'a > .undefined',
            nameInput: '[data-cy="nameInput"]',
            priceInput: '[data-cy="priceInput"]',
            fansInput: '[data-cy="fansInput"]',
            savesInput: '[data-cy="savesInput"]',
            powerSelect: '[data-cy="powersSelect"]',
        }
        return selectors;
    }

    createHero(heroName, price, fans, saves, power) {
        cy.get(this.selectorsList().createHeroButton).click()
        // This command is to chek if the path is the right path to create hero
        cy.location('pathname').should('eq', '/heroes/new');
        //Fill all field to create the new hero
        cy.get(this.selectorsList().nameInput).should('have.value', '')
        cy.get(this.selectorsList().nameInput).type(heroName)
        cy.get(this.selectorsList().priceInput).should('have.value', '')
        cy.get(this.selectorsList().priceInput).type(price)
        cy.get(this.selectorsList().fansInput).should('have.value', '')
        cy.get(this.selectorsList().fansInput).type(fans)
        cy.get(this.selectorsList().savesInput).should('have.value', '')
        cy.get(this.selectorsList().savesInput).type(saves)
        cy.get(this.selectorsList().powerSelect).select(power)
        // The command bellow shows the way to get img file from the project using 'cypress-file-upload'> need to install in the project
        cy.get('[data-cy="avatarFile"]').attachFile('Timbersaw_icon.jpg')
        cy.get('button').eq(2).click()
    }


    editHero(i){
        cy.get(':nth-child(7) > .w-\[280px\] > :nth-child(1) > .mt-2 > :nth-child(2) > [data-cy="pencil"]').click()
    }

}

export default AdminPage