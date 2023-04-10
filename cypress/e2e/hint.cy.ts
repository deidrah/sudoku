/// <reference types="cypress" />

describe('Hint', () => {
  it('fills each empty cell', () => {
    cy.visit('/')
    cy.get('td.game__cell.game__cell--filled').should('have.length', 45)
    cy.get('td.game__cell').not('.game__cell--filled').each($cell => {
      cy.wrap($cell).click()
      //cy.get('td.game__cell').not('.game__cell--filled').should('have.length', 36)
      cy.get('.status__action-hint').click()
    })
    cy.contains('.overlay__text', 'You solved it').should('be.visible')
  })
})