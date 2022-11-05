describe('MyGallery appearance', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/mygallery')
  });

  it('shows the user the navbar at the top', () => {
    cy.get('.navbar').should('be.visible');
  });

  it('starts out without any memes, but shows a message prompting the user to create some memes with a link to do so', () => {
    cy
      .get('.meme-card').should('not.exist')
      .get('.user-prompt').should('be.visible')
      .get('.user-prompt > a').should('have.attr', 'href').and('eq', '/')
  })
});

describe('MyGallery functionality', () => {
  beforeEach(() => {
    cy
    .visit('http://localhost:3000/mygallery')
    .get('.user-prompt > a').click()
    .get('#SK-A-5033').click()
    .get('.meme-input').type('When that Turing t-shirt arrives')
    .get('.meme-save-button').click()
    .get('.my-gallery-link').click()
  })

  it('will show memes when the user creates them, including across page reloads', () => {
    cy
    .get('.meme-card').within(() => {
      cy
        .get('.memeTitle')
          .should('be.visible')
          .contains('When that Turing t-shirt arrives')
    })
    .reload()
    .get('.meme-card').within(() => {
      cy
        .get('.memeTitle')
          .should('be.visible')
          .contains('When that Turing t-shirt arrives')
    })
  })
  it('allows users to delete their saved memes', () => {
   cy
    .get('.meme-delete-button').click()
    .get('.meme-card').should('not.exist')
  })
});