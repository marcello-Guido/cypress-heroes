class EragePage {
    selectorsList() {
        const selectors = {
            eraseButton: '[data-cy="trash"]',
            heroCard: '[data-cy="hero-card"]',
            confirmEraseButton: '.gap-2 > .text-white',
            editCardButton: "[data-cy='pencil']",
        }
        return selectors
    }
    eraseHero(heroName) {
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().eraseButton).click();
        })

        // Check the pop-up to delete the hero
        cy.get('.modal-container > .open').should('be.visible')
        cy.get(this.selectorsList().confirmEraseButton).click()
    }

    searchHero(heroName) {
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().editCardButton).click();
        })

        // Check the edit page
        cy.location('pathname').should('match', /\/heroes\/\d+\/edit$/)
        

    }

    deleteHeroByEdit() {
        cy.get('.bg-red-600').click()

        //check the pop-up
        cy.get('.modal-container > .open')
            .should('be.visible')
        
        cy.get('.gap-2 > .text-white').click()

    }

    checkHerodeleted(heroName){
        cy.get('a > img').click()
        cy.contains(this.selectorsList().heroCard, heroName).should('not.exist')
    }

    delEditUser(heroName){
       
            cy.get(this.selectorsList().editCardButton).should('not.exist')
            cy.get(this.selectorsList().eraseButton).should('not.exist')
       


    }
}

export default EragePage