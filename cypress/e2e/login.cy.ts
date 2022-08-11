describe('empty spec', () => {
  beforeEach(()=> {
    cy.visit('/login')
    cy.viewport(320,	480)
  })
  it('should have login form', () => {
    cy.get('[data-testid="login-container"]').should('exist')
  })
  it('should have title of login' ,()=> {
    cy.get('[data-testid="form-title"]').should('have.text', 'Login')
  })
  it('should have email input', ()=> {
    cy.get('[data-testid="email-input"]').should('exist')
  })
  it('should have password input', ()=> {
    cy.get('[data-testid="password-input"]').should('exist')
  })
  it('should have login button', ()=> {
    cy.get('[data-testid="login-button"]').should('exist')
  })
  it('should have sign up container', ()=> {
    cy.get('[data-testid="signup-container"]').should('exist')
  })
  it('should have sign up button', ()=> {
    cy.get('[data-testid="signup-button"]').should('exist')
  })
})

export default {}