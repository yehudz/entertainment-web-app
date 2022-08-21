describe('Trending section', ()=> {
  beforeEach(()=> {
    cy.visit('/home')
    cy.viewport(320,	568)
  })

  it('should have a trending section', ()=> {
    cy.get('[data-testid="trending-section"]')
    .should('exist')
  })
  it('should have 5 trending items', ()=> {
    cy.get('[data-testid="trending-section"]')
    .children()
    .should('have.length', 5)
  })
})