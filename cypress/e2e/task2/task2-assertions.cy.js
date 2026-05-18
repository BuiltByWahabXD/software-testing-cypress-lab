describe('Assertions Practice', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Different Assertions', () => {

    cy.get('.login_logo')
      .should('be.visible')

    cy.get('.login_logo')
      .should('have.text', 'Swag Labs')

    cy.get('[data-test="login-button"]')
      .should('have.attr', 'type', 'submit')

  })

  it('Negative Assertion', () => {

    cy.get('.shopping_cart_link')
      .should('not.exist')

  })

})