describe('Search bar should be accessable in every page', ()=> {
  it('Should have a search bar in the home page', ()=> {
    cy.visit('/home')
    cy.get('[data-testid="searchbar"]').should('exist')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search for movies and tv shows')
  })
  it('Should have a search bar in the movies page', ()=> {
    cy.visit('/movies')
    cy.get('[data-testid="searchbar"]').should('exist')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search for movies')
  })
  it('Should have a search bar in the movies page', ()=> {
    cy.visit('/shows')
    cy.get('[data-testid="searchbar"]').should('exist')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search for TV series')
  })
  it('Should have a search bar in the bookmarks page', ()=> {
    cy.visit('/bookmarks')
    cy.get('[data-testid="searchbar"]').should('exist')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search for bookmarked shows')
  })
})