/* eslint-disable cypress/no-unnecessary-waiting */
import { When, And } from 'cypress-cucumber-preprocessor/steps'

const searchProducts = require('../../support/search_products_obj')
const obj = new searchProducts()

When('I click on search bar, I can see Pencarian Popular suggestion popup', () => {
  cy.get(obj.searchBar).click();
  cy.get(obj.beforeResult).should(element => {
    expect(element).to.be.visible;
  });
});

When('I search from search bar', () => {
    cy.get(obj.searchBar).type('iphone 13{enter}');
  });

And('I got the product lists', () => {
  cy.wait(5000);
  cy.get(obj.afterResult).should(element => {
    expect(element).to.be.visible;
  });
  
});