describe('Alias Practice', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Using Alias', () => {

    cy.get('[data-test="username"]')
      .as('usernameField')

    cy.get('@usernameField')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url().should('include', 'inventory')

  })

})