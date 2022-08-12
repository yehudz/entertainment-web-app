describe('Thumbnail', () => {
  beforeEach(()=> {
    cy.visit('/home')
    cy.viewport(320,	568)
  })
  it('should have thumbnail container', () => {
    cy.get('[data-testid="content-thumbnail"]').should('exist')
  })
  it('should have thumbnail image', () => {
    cy.get('[data-testid="thumbnail-image"]').should('exist')
  })
  it('should have title', () => {
    cy.get('[data-testid="thumbnail-title"]').should('exist')
  })
  it('should have details', () => {
    cy.get('[data-testid="thumbnail-details"]').should('exist')
  })
  it('should have bookmark bottom', () => {
    cy.get('[data-testid="bookmark-button"]').should('exist')
  })
})