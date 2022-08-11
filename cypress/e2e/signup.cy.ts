describe('empty spec', () => {
  beforeEach(()=> {
    cy.visit('/signup')
    cy.viewport(320,	568)
  })
  it('should have login form', () => {
    cy.get('[data-testid="login-container"]').should('exist')
  })
  it('should have title of login' ,()=> {
    cy.get('[data-testid="form-title"]').should('have.text', 'Sign Up')
  })
  it('should have email input', ()=> {
    cy.get('[data-testid="email-input"]').should('exist')
  })
  it('should have password input', ()=> {
    cy.get('[data-testid="password-input"]').should('exist')
  })
  it('should have repeate password input', ()=> {
    cy.get('[data-testid="repeat-password-input"]').should('exist')
  })
  it('should have signup button', ()=> {
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