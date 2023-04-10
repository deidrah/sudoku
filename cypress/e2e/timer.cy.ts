describe('template spec', () => {
  // it('shows 10 seconds', {defaultCommandTimeout: 10}, () => {
  //   cy.visit('/')
  //   cy.contains('.status__time', '00:10')
  //   cy.get('.game__cell--filled').should('have.length', 45)
  // })
  // it('shows 10 seconds', () => {
  //   cy.visit('/')
  //   cy.contains('.status__time', '00:10', {timeout: 10000})
  //   cy.get('.game__cell--filled').should('have.length', 45)
  // })
  it('shows 10 seconds', () => {
    cy.visit('/')
    for(let k = 0; k < 10; k++) {
      cy.contains('.status__time', `00:0${k}`)
    }
  })
})