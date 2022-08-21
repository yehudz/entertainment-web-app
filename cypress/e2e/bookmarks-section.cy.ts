describe('Bookmark section', ()=> {
  beforeEach(()=> {
    cy.visit('/bookmarks')
  })
  it('should have a bookmark section', ()=> {
    cy.get('[data-testid="bookmarks-section"]').should('exist')
  })
  it('should have section icon active', ()=> {
    cy.get('[data-testid="bookedmark-filter"]').should('have.class', 'active')
  })
  it('should have two sections one for movie and one for tv shows', ()=> {
    cy.get('[data-testid="bookmarks-section"]').children().should('have.length', 4)
  })
})