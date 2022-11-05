describe('MyGallery component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/mygallery')
  });

  it('shows the user the navbar at the top', () => {
    cy.get('.navbar').should('be.visible');
  });

  it('starts out without any memes', () => {
    cy.get('.my-gallery').children().should('not.exist');
  })

  it(''
  )

})