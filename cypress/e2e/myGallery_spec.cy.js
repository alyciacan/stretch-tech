describe('MyGallery component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/IndividualPainting/SK-C-6').as('indivPainting')
    cy.wait('@indivPainting')
    cy.get('.meme-input').type("This is a test meme!")
    cy.get('.meme-save-button').click()
    cy.get('.my-gallery-link').click()
  })
  it('should have the correct url: /mygallery', () => {
    cy.url().should('include', '/mygallery')})
  
  it('displays the memes created by the user', () => {
    cy.get('.meme-card').contains('This is a test meme!')
  })
})