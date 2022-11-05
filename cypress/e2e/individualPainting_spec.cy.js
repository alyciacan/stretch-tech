describe("A user can view a single painting with its information when he clicks on a particular image", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://www.rijksmuseum.nl/api/en/collection/#SK-C-5?key=AgQXh8Og",
      { fixture: "painting1.json" }
    ).as("artObject");
    cy.intercept(
      "GET",
      "https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn",
      { fixture: "allPaintings.json" }
    ).as("artObject");
    cy.visit("http://localhost:3000/");
    cy.get("#SK-C-5").click();
  });

  it("should display selected image", () => {
    cy.get(".individual-painting-img").should("exist").should("be.visible");
  });

  it("should have image title, date, description", () => {
    cy.get(".individual-painting-title").contains("The Night Watch");
    cy.get(".individual-painting-artist").contains(
      "Artist: Rembrandt van Rijn | 1642"
    );
    cy.get(".individual-painting-description").should("be.visible");
  });

  it("should have a input form", () => {
    cy.get(".meme-input").should("exist").should("be.visible");
  });

  it("should have a disable button when form input is empty", () => {
    cy.get(".meme-save-button").should("be.visible").should("be.disabled");
  });

  it("Should be able to type in the input filled, see the text over the image and button should not be disabled if form input filled is filled", () => {
    cy.get(".meme-input").should("exist").click().type("this is a test");
    cy.get(".meme-title").contains("this is a test").should("be.visible");
    cy.get(".meme-save-button").should("not.be.disabled");
  });

  it("should clear form after user click on the save meme button and button be disabled", () => {
    cy.get(".meme-input").should("exist").click().type("this is a test");
    cy.get(".meme-save-button").click();
    cy.get(".meme-save-button").should("be.disabled");
  });

  it("should be able to click on 'my gallery' and see the meme that was created", () => {
    cy.get(".meme-input").should("exist").click().type("this is a test");
    cy.get(".meme-save-button").click();
    cy.get(".meme-save-button").should("be.disabled");
    cy.get('.my-gallery-link').click();
    cy.get(".memeTitle").contains("this is a test").should("be.visible");
  });

  it("should be able to go back home", () => {
    cy.intercept(
      "GET",
      "https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn",
      { fixture: "allPaintings.json" }
    ).as("artObject");
    cy.get(".home-button > img").click();
    cy.get(".images-container").should("exist");
    cy.get("#SK-C-216").should("exist").should("be.visible");
  });
});
