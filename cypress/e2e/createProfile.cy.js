describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/registration')
  })

  it('should steps 1 and 2 works', () => {
    cy.get('input[type="text"]').type('Tester Cypress')
    cy.get('input[type="email"]').type('testerxo@teste.com')
    cy.get('input[type="tel"]').type('43987655432')
    cy.get('button[type="submit"').click()
    cy.get('input[type="password"]').type('@DNCReact777#')
    cy.get('button[type="submit"').should('be.visible')
  })
})
