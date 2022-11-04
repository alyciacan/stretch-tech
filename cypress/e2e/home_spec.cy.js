describe('As a user, when I load the application, I can see a collection of paintings', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn', { fixture: 'allPaintings'}).as('artObjects')
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
    cy.get(".error-text").contains(`We looked all over, but the page seems to have gotten away from us! Try
    this one:`);
  });

  
  it('should bring a user to the error page if the user types in a bad URL', () => {
    cy
      .visit('http://localhost:3000/fsdf')
      .get('h1').contains('Page not found')
      .get('p.error-text').contains(`We looked all`)
      .get('button.error-button').contains('Hom')
    
  })
  
  it('should display the navBar with application logo and buttons', () => {
    cy
    .get('.logo-img').should('be.visible')
    .get('.navbar-link').should('be.visible')
  })
  
  it('should be able to click on the myGallery button and be taken to myGallery', () => {
    cy
    .get('.button')
    .click()
  })
  
  it('should display the aside that read "Art Gallery" and a p tag with directions for the site', () => {
    cy
    .get('h2').contains('Art Party')
    .get('.description > p').contains('is how the most sophisticated, discerning art history buffs get their meme jollies. Simply click on your favorite oeuvre to get started!')
  })
  
  it('should display all paintings', () => {
    cy
    .get('.images-container').should('exist')
    .get(':nth-child(1) > .images').should('be.visible')
    .get(':nth-child(2) > .images').should('be.visible')
  })
  
  it('should be able to click on a painting a view details about it', () => {
    cy
    .get('.images-container').should('exist')
    .get(':nth-child(1) > .images').should('be.visible')
    .click()
    cy.intercept(
      'GET', 
      'https://www.rijksmuseum.nl/api/en/collection/**', 
      { fixture: 'painting2.json'}
      )
      .visit("http://localhost:3000/IndividualPainting/SK-A-4050")
    })
    
    it('should not display details for an individual painting', () => {
      cy
      .url().should('eq', 'http://localhost:3000/')
      .url().should('not.eq', 'http://localhost:3000/IndividualPainting/SK-A-4050')
      .get('.individual-painting').should('not.exist')
    })
    
    it('Should be able to use the browser arrow buttons to go between the home page and individual painting page', () => {
      cy.intercept(
        'GET', 
        'https://www.rijksmuseum.nl/api/en/collection/**', 
        { fixture: 'painting2.json'}
        )
        cy.visit("http://localhost:3000/IndividualPainting/SK-A-4050")
        .url().should('eq', 'http://localhost:3000/IndividualPainting/SK-A-4050')
        .go('back')
        .url().should('eq', 'http://localhost:3000/')
        .go('forward')
        .url().should('eq', 'http://localhost:3000/IndividualPainting/SK-A-4050')
      }) 

    it.only('should display a page loading message while waiting for a paintings to display on page', () => {
      cy
      .get('.images-container').should('exist')
      .get(':nth-child(1) > .images').should('be.visible')
      .click()
      .intercept(
        'GET', 
        'https://www.rijksmuseum.nl/api/en/collection/**', 
        { fixture: 'painting2.json'}
        )
        cy.visit("http://localhost:3000/IndividualPainting/SK-A-4050")
      .get('.loading-text').contains('Loading...')
    })
  })
    