/// <reference types="cypress" />
import { minQuantity } from "./sharedVariables"

describe('Cards verification', () => {
  beforeEach(() => {
    cy.intercept({resourceType: /xhr|fetch/}, {log:false})
    cy.visit('https://andresarad1.github.io/hotels/')
  })

  it('Verify all cards are visible since the very beginning', () => {
    cy.VerifyAllCards(minQuantity)
  })
})
