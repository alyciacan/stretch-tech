describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn', { fixture: 'allPaintings'}).as('artObjects')
    cy.visit('http://localhost:3000/')
    cy.wait('@artObjects').then(() => {
      'response.ok'
    })
  })
  it('should display the navBar with application logo and buttons', () => {
    cy
      .get('.logo-img').should('be.visible')
      .get('.navbar-link').should('be.visible')
  })
  it('should display all paintings', () => {
    cy
      .get('.images-container').should('exist')
      .get(':nth-child(1) > .images').should('be.visible')
      .get(':nth-child(2) > .images').should('be.visible')
      // .should('have.length', 2)
  })
})
