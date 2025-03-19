describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.login('tester_cypress@dnc.com.br', '@DNCReact178#')
    cy.visit('http://localhost:5173/profile')
  })

  it('should display profile form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="email"').should('be.visible')
    cy.get('input[type="password"').should('be.visible')
    cy.get('button[type="submit"').should('be.visible')
    cy.get('#update-profile').should('be.visible')
    cy.get('#delete-profile').should('be.visible')
  })

  it('should display theme switch button', () => {
    cy.get('#theme-switch').should('be.visible')
  })

  it('should display logout button and logout flow works', () => {
    cy.get('#logout').click()
    cy.url().should('include', '/')
  })
})
