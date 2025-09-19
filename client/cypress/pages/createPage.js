import 'cypress-file-upload';

class CreatePage{
    selectorsList(){
        const selectors = {
            heroName: '[data-cy="nameInput"]',
            heroPrice: '[data-cy="priceInput"]',
            heroFans: '[data-cy="fansInput"]',
            heroSaves: '[data-cy="savesInput"]' ,
            heroPower: '[data-cy="powersSelect"]',
            heroAvatar: '[data-cy="avatarFile"]',
            submitButton: '.bg-blue-700',
        }
        return selectors
    }
    newHero(name, price, fans, saves, power){
        cy.get('a > .undefined').click() // Clicking in the createButton after login
        //Checking if is in the right page
        cy.location('pathname').should('eq','/heroes/new')
        // Putting all new hero information
        cy.get(this.selectorsList().heroName).type(name)
        cy.get(this.selectorsList().heroPrice).type(price)
        cy.get(this.selectorsList().heroFans).type(fans)
        cy.get(this.selectorsList().heroSaves).type(saves)
        cy.get(this.selectorsList().heroPower).select(power)
        // Importing image
        cy.get(this.selectorsList().heroAvatar).attachFile('avatar.jpg')
        // Submit to create new hero
        cy.get(this.selectorsList().submitButton).eq(1).click()
    }

    checkHero(name){
       cy.contains('[data-cy="name"]', name).should('be.visible')

    }
}

export default CreatePage