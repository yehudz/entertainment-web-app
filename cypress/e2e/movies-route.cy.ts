describe('Bookmark section', ()=> {
  beforeEach(()=> {
    cy.visit('/movies')
  })
  it('should have a movies section', ()=> {
    cy.get('[data-testid="movies-section"]').should('exist')
  })
  it('should have section icon active', ()=> {
    cy.get('[data-testid="movies-filter"]').should('have.class', 'active')
  })
  it('should have two sections one for movie and one for tv shows', ()=> {
    cy.get('[data-testid="movies-section"]').children().should('have.length', 2)
  })
})