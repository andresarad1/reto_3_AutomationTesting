import { cardContainer } from "../e2e/cypress-challenge/sharedVariables";

Cypress.Commands.add('VerifyAllCards', (MinQuantity) => {
    cy.get(cardContainer).its('length').then((count) => {
        cy.log(`${count} cards were found`)
  
        expect(count).to.be.at.least(MinQuantity)
      })
  });