describe('empty spec', () => {
  beforeEach(()=> {
    cy.visit('/home')
  })
  it('Should have image', () => {
    cy.get('[data-testid="trending-item-image"]')
    .eq(0)
    .should('exist')
  })
  it('should have a title', ()=> {
    cy.get('[data-testid="trending-item-title"]')
    .eq(0)
    .should('exist')
  })
  it('should have a year release', ()=> {
    cy.get('[data-testid="trending-item-year"]')
    .eq(0)
    .should('exist')
  })
  it('should have a type title', ()=> {
    cy.get('[data-testid="trending-item-type"]')
    .eq(0)
    .should('exist')
  })
  it('should have rating', ()=> {
    cy.get('[data-testid="trending-item-rating"]')
    .eq(0)
    .should('exist')
  })
  it('should a bookmark button', ()=> {
    cy.get('[data-testid="trending-item-bookmark-button"]')
    .eq(0)
    .should('exist')
  })
})