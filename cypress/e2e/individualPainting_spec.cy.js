describe("empty spec", () => {
  beforeEach(() => {
  

    cy.intercept("GET", "https://www.rijksmuseum.nl/api/en/collection?key=AgQXh8Og&involvedMaker=Rembrandt+van+Rijn", {
      fixture: "painting1.json",
    }).as("artObject");

    cy.visit("http://localhost:3000/");
    cy.get("#SK-C-5").click(); 
    
  });

  // cy.get('#SK-C-5')

  it("should display selected image", () => {
    cy.get(".individual-painting-img").should("exist").should("be.visible");
  });
  it.only("should have image title, date, description", () => {
    cy.get(".individual-painting-title")
      .contains("The Night Watch")
      .get(".individual-painting-artist")
      .contains("Artist: Rembrandt van Rijn | 1642")
      .get(".individual-painting-description")
      .should("be.visible");
  });
  it("should be able to go back home", () => {
    cy.get(".logo-img").click();
    cy.get(".logo-img").should("exist");
  });
});
