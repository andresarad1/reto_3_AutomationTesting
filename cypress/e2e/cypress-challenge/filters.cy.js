/// <reference types="cypress" />
import * as variables from "./sharedVariables"

describe('Filters verification', () => {
  beforeEach(() => {
    cy.intercept({resourceType: /xhr|fetch/}, {log:false})
    cy.visit('https://andresarad1.github.io/hotels/')
  })

  it('Verify every card correspond to selected price', () => {
    // price1
    cy.get(variables.filterPricesContainer).select('1')
    cy.get(variables.cardContainer).should('contain', '$')

    // price2
    cy.get(variables.filterPricesContainer).select('2')
    cy.get(variables.cardContainer).should('contain', '$$')

    // price3
    cy.get(variables.filterPricesContainer).select('3')
    cy.get(variables.cardContainer).should('contain', '$$$')

    // price4
    cy.get(variables.filterPricesContainer).select('4')
    cy.get(variables.cardContainer).should('contain', '$$$$')
  })

  it('Verify all cards are visible after cleaning filters', () => {
    cy.get(variables.clearButton).click()
    cy.VerifyAllCards(variables.minQuantity)
  })

  it('Verify message content changes with every country selection', () => {
    // All
    cy.get('#filter-countries').select('all')
    cy.get(variables.secondP).should('contain', variables.messageContent + 'all.')

    // Argentina
    cy.get('#filter-countries').select('Argentina')
    cy.get(variables.secondP).should('contain', variables.messageContent + 'Argentina.')

    // Brasil
    cy.get('#filter-countries').select('Brasil')
    cy.get(variables.secondP).should('contain', variables.messageContent + 'Brasil.')

    // Chile
    cy.get('#filter-countries').select('Chile')
    cy.get(variables.secondP).should('contain', variables.messageContent + 'Chile.')

    // Uruguay
    cy.get('#filter-countries').select('Uruguay')
    cy.get(variables.secondP).should('contain', variables.messageContent + 'Uruguay.')
  })

  it('Verify message where there are no available hotels', () => {
    cy.get(variables.filterCountries).select('Uruguay')
    cy.get(variables.filterPricesContainer).select('2')
    cy.get(variables.messageAlert).should('contain', variables.noHotelsMessage)
  })
})
