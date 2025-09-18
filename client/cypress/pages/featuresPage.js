class FeaturesPage {

    selectorsList() {
        const selectors = {
            hireButton: "[data-cy='money']",
            fansButton: '[data-cy="like"]',
            heroCard: '[data-cy="hero-card"]',
            saveHeroNumber: '[data-cy="saves"]',
            fansHeroNumber: '[data-cy="fans"]',
        }
        return selectors
    }

    hireHero(heroName) {
        // 1) pega o número antes e salva como alias
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().saveHeroNumber)
                .invoke('text')
                .then((textBefore) => {
                    cy.wrap(Number(textBefore.trim())).as('savesBefore'); // @savesBefore
                });

            cy.get(this.selectorsList().hireButton).click();
        });

        // 2) clicar no YES
        cy.contains('button', /^Yes$/i).should('be.visible').click();

        // 3) pega o número depois e compara
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().saveHeroNumber)
                .invoke('text')
                .then((textAfter) => {
                    const savesAfter = Number(textAfter.trim());

                    cy.get('@savesBefore').then((savesBefore) => {
                        cy.log('Antes:', savesBefore, 'Depois:', savesAfter);

                        // comparação: depois deve ser exatamente +1 do antes
                        expect(savesAfter).to.eq(
                            savesBefore + 1,
                            'O número deve aumentar exatamente 1 unidade'
                        );

                        cy.log('Success! O número aumentou em 1');
                    });
                });
        });
    }

    fansHero(heroName) {
        // 1) pega o número antes e salva como alias
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().fansHeroNumber)
                .invoke('text')
                .then((textBefore) => {
                    cy.wrap(Number(textBefore.trim())).as('savesBefore'); // @savesBefore
                });

            cy.get(this.selectorsList().fansButton).click();
        });

        // 3) pega o número depois e compara
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().fansHeroNumber)
                .invoke('text')
                .then((textAfter) => {
                    const savesAfter = Number(textAfter.trim());

                    cy.get('@savesBefore').then((savesBefore) => {
                        cy.log('Antes:', savesBefore, 'Depois:', savesAfter);

                        // comparação: depois deve ser exatamente +1 do antes
                        expect(savesAfter).to.eq(
                            savesBefore + 1,
                            'O número deve aumentar exatamente 1 unidade'
                        );

                        cy.log('Success! O número aumentou em 1');
                    });
                });
        });
        /*
        
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().fansHeroNumber)
                .invoke('text')
                .then((textBefore) => {
                    cy.wrap(Number(textBefore.trim())).as('savesBefore'); // @savesBefore
                });

            cy.get(this.selectorsList().fansButton).click();
        });

        // 3) pega o número depois e compara
        cy.contains(this.selectorsList().heroCard, heroName).within(() => {
            cy.get(this.selectorsList().fansHeroNumber)
                .invoke('text')
                .then((textAfter) => {
                    const savesAfter = Number(textAfter.trim());

                    cy.get('@savesBefore').then((savesBefore) => {
                        cy.log('Antes:', savesBefore, 'Depois:', savesAfter);

                        // comparação: depois deve ser exatamente +1 do antes
                        expect(savesAfter).to.eq(
                            savesBefore + 1,
                            'O número deve aumentar exatamente 1 unidade'
                        );

                        cy.log('Success! O número aumentou em 1');
                    });
                });
        });
        */
    }

}

export default FeaturesPage