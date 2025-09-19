class EditPage {

    selectorsList() {
        const selectors = {
            heroName: '[data-cy="nameInput"]',
            heroCard: '[data-cy="hero-card"]',
            editCardButton: "[data-cy='pencil']",
            priceHero: '[data-cy="priceInput"]',
            fansHero: '[data-cy="fansInput"]',
            savesHero: '[data-cy="savesInput"]',
            selecListHero: '[data-cy="powersSelect"]',
            submitButton: '.bg-blue-700',
        }
        return selectors
    }

    checkHeroInfo() {
        cy.get(this.selectorsList().heroName)
            .should('exist')
            .and('be.visible')
            .and('not.be.disabled')
            .clear()
        cy.get(this.selectorsList().priceHero)
            .should('exist')
            .and('be.visible')
            .and('not.be.disabled')
            .clear()

        cy.get(this.selectorsList().fansHero)
            .should('exist')
            .and('be.visible')
            .and('not.be.disabled')
            .clear()
        cy.get(this.selectorsList().savesHero)
            .should('exist')
            .and('be.visible')
            .and('not.be.disabled')
            .clear()

        cy.get(this.selectorsList().selecListHero)
            .should('exist')
            .and('be.visible')
            .and('not.be.disabled')

    }

    searchHero(heroName) {
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().editCardButton).click();
        })

        // Check the edit page
        cy.location('pathname').should('match', /\/heroes\/\d+\/edit$/)
        this.checkHeroInfo()

    }

    editHero(newName, newPrice, newFans, newSave, newPower) {
        cy.get(this.selectorsList().heroName)
            .type(newName)
            .should('have.value', newName)

        cy.get(this.selectorsList().priceHero)
            .type(newPrice)
            .should('have.value', newPrice)

        cy.get(this.selectorsList().fansHero)
            .type(newFans)
            .should('have.value', newFans)

        cy.get(this.selectorsList().savesHero)
            .type(newSave)
            .should('have.value', newSave)

        cy.get(this.selectorsList().selecListHero)
            .select(newPower)


        cy.get(this.selectorsList().submitButton).eq(1).click()
    }

    UserSearchHero(heroName) {
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().editCardButton)
                .should('not.exist')
        })
    }
}
export default EditPage