describe('As a user, when I load the application, I can see a collection of paintings', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn', { fixture: 'allPaintings'}).as('artObjects')
    // cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn', { fixture: 'allPaintings'}).as('artObjects')
    cy.visit('http://localhost:3000/')
    cy.wait('@artObjects').then(() => {
      'response.ok'
    })
  })

  it.skip('should display an error message (500 status code) if paintings are unable to be displayed on the screen', () => {
    cy.intercept(
      "GET",
      "https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn",
      {
        statusCode: 500,
        body: {
          error: "Not Found",
        },
      }
    )
    cy.visit("http://localhost:3000/")
    cy.get(".error-text").contains(` We looked all over, but the page seems to have gotten away from us, Try
    This one`);
  });

  it('should display the navBar with application logo and buttons', () => {
    cy
      .get('.logo-img').should('be.visible')
      .get('.navbar-link').should('be.visible')
  })

  it('should display the aside with an h1 that read "Art Gallery" and a p tag with directions for the site', () => {
    cy
      .get('h1').contains('Art Gallery')
      .get('.description > p').contains('Art Party is how the most sophisticated, discerning art history buffs get their meme jollies. Simply click on your favorite oeuvre to get started!')
  })

  it('should display all paintings', () => {
    cy
      .get('.images-container').should('exist')
      .get(':nth-child(1) > .images').should('be.visible')
      .get(':nth-child(2) > .images').should('be.visible')
  })
  
  it('should not display details for an individual painting', () => {
    cy
      .url().should('eq', 'http://localhost:3000/')
      .url().should('not.eq', 'http://localhost:3000/IndividualPainting/SK-A-4050')
      .get('.individual-painting').should('not.exist')
  })

  it.skip('Should be able to use the browser arrow buttons to go between the home page and individual painting page', () => {
    cy
      .get('.images').first().click()
      // .intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection/*', { fixture: 'Painting1'}).as('artObject')
      .visit('http://localhost:3000/IndividualPainting/SK-A-4050')
      .url().should('eq', 'http://localhost:3000/IndividualPainting/SK-A-4050')
      .go('back')
      .url().should('eq', 'http://localhost:3000/')
      .go('forward')
      .url().should('eq', 'http://localhost:3000/IndividualPainting/SK-A-4050')
  }) 
})
