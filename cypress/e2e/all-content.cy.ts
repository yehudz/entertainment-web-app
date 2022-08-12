describe('All Content', () => {
  beforeEach(()=> {
    cy.visit('/home')
    cy.viewport(320,	568)
  })
  it('should have all content container', () => {
    cy.get('[data-testid="all-content"]').should('exist')
  })
  it('should have some content', ()=> {
    cy.get('[data-testid="all-content"]').children().should('have.length.at.least', 2)
  })
  it('should have a thumbnail', ()=> {
    cy.get('[data-testid="content-thumbnail"]').eq(0).should('exist')
  })
})