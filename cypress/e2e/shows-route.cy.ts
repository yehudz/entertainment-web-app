describe('Bookmark section', ()=> {
  beforeEach(()=> {
    cy.visit('/shows')
  })
  it('should have a shows section', ()=> {
    cy.get('[data-testid="shows-section"]').should('exist')
  })
  it('should have section icon active', ()=> {
    cy.get('[data-testid="tv-shows-filter"]').should('have.class', 'active')
  })
  it('should have two sections one for tv shows', ()=> {
    cy.get('[data-testid="shows-section"]').children().should('have.length', 2)
  })
})