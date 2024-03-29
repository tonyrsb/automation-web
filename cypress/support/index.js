// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
require('./commands');

require('cypress-xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

const loginPage = require('../support/login_page_obj')
const obj = new loginPage()
beforeEach(() => {
  cy.clearCookies();
  cy.visit(`${Cypress.env('AUTH_URL')}/login`, {failOnStatusCode: false, chromeWebSecurity: false});
  cy.get(obj.email).click();
  cy.get(obj.email).type(<your email>);
  cy.get(obj.next).click();
  cy.get(obj.password).type(<your password>);
  cy.get(obj.loginButton).click();
  cy.get(obj.imgProfile).should(element => {
    expect(element).to.be.visible;
  });
});
