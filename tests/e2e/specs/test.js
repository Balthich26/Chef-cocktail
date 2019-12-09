// https://docs.cypress.io/api/introduction/api.html

describe('CocktailChef', () => {
  it('Visits the Cocktailchef homepage', () => {
    cy.visit('/');
    cy.contains('h1', 'Chef Cocktail');
  });

  it('Displays multiple cocktails', () => {
    cy.get('.cocktailItem').should('have.length', 2);
  });

  it('Go to random cocktail tab', () => {
    cy.get('.buttonRandom').click();
    cy.url().should('eq', 'http://localhost:8080/random');
  });

  it('displays a random cocktail', () => {
    cy.get('main').should(not.be.empty);
  });

  it('go back to home', () => {
    cy.get('.buttonHome').click();
    cy.url().should('eq', 'http://localhost:8080/');
  });

  it('displays one single cockatail in detail', () => {
    cy.get('.cocktailItem__buttonSingle').click();
    cy.get('main').should(not.be.empty);
    cy.get('img').should('have.length', 1);
  });

  it('display result of a cocktail search', () => {
    cy.get('#searchInput').type('mojito');
    cy.get('#searchSubmit').click();
    cy.get('main').should(not.be.empty);
    cy.get('h3').contains('mojito');
  });

  it('Can see the disabled submit button when searchbar is empty', () => {
    cy.get('#searchInput').clear();
    cy.get('#searchSubmit:disabled').should('exist');
  });
});
