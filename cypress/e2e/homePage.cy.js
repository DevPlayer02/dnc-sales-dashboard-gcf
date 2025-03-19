describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => {
    cy.login('tester_cypress@dnc.com.br', '@DNCReact178#')
    cy.visit('http://localhost:5173/home')
  })

  it('should display total sales', () => {
    cy.get('#total-sales').should('be.visible')
  })
  it('should display total sales', () => {
    cy.get('#month-goals').should('be.visible')
  })
  it('should display total sales', () => {
    cy.get('#total-leads').should('be.visible')
  })
  it('should display total sales', () => {
    cy.get('#month-sales-chart').should('be.visible')
  })
  it('should display total sales', () => {
    cy.get('#sales-stars').should('be.visible')
  })
  it('should display total sales', () => {
    cy.get('#news').should('be.visible')
  })
  it('should display total sales', () => {
    cy.get('#year-sales-chart').should('be.visible')
  })
})
