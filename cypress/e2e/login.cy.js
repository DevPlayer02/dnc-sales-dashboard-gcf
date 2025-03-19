describe('Login Flow Correct Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('tester_cypress@dnc.com.br')
    cy.get('input[type="password"]').type('@DNCReact178#')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow Invalid Credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with invalid credentials', () => {
    cy.get('input[type="email"').type('one_cypress@dnc.com.br')
    cy.get('input[type="password"').type('@DNCReact777#')
    cy.get('button[type="submit"').click()
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })
})
