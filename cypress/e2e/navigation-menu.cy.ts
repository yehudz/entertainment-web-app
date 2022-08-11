describe('Navigation menu', ()=> {
  beforeEach(()=> {
    cy.visit('/home')
    cy.viewport(320,	568)
  })
  it('should exist', ()=> {
    cy.get('[data-testid="navigation-container"]').should('exist')
  })
  it('should have logo', ()=> {
    cy.get('[data-testid="logo"]').should('exist')
  })
  it('should have main menu', ()=> {
    cy.get('[data-testid="main-menu-container"]').should('exist')
  })
  it('should have all filter and needs to have all filter selected by default', ()=> {
    cy.get('[data-testid="all-filter"]').should('exist')
    cy.get('[data-testid="all-filter"]').should('have.class', 'active')
  })
  it('should have movies filter', ()=> {
    cy.get('[data-testid="movies-filter"]').should('exist')
  })
  it('should have tv shows filter', ()=> {
    cy.get('[data-testid="tv-shows-filter"]').should('exist')
  })
  it('should have bookedmark filter', ()=> {
    cy.get('[data-testid="bookedmark-filter"]').should('exist')
  })
  it('should have profile button', ()=> {
    cy.get('[data-testid="profile-button"]').should('exist')
  })
})