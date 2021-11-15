import { When, And } from 'cypress-cucumber-preprocessor/steps'

const atc = require('../../support/add_to_cart_obj')
const obj = new atc()

When('I go to product detail page', () => {
    cy.visit(`${Cypress.env('WEBSITE_URL')}/p/handphone/hp-smartphone/49zgnae-jual-iphone-12-pro-max-promax-128gb-256gb-512gb-garansi-ibox-1th?from=list-product&pos=13`, {failOnStatusCode: false, chromeWebSecurity: false});
    cy.get(obj.productName).should(element => {
        expect(element).to.be.visible;
    });
});

And('I choose the storage of product', () => {
    cy.get(obj.storageDrodpDown).click();
    cy.get(obj.selectStorage).click();
});

And('I click add to cart and see Cart popup', () => {
    cy.get(obj.atcButton).click();
    cy.get(obj.popUpCart).should(element => {
        expect(element).to.be.visible;
    })
});

Then('I want to see product that i want to buy on My Cart', () => {
    cy.get(obj.seeCartButton).click();
    cy.get(obj.cartTitle).should(element => {
        expect(element).to.be.visible;
    });
    cy.get(obj.itemName).should(element => {
        expect(element).to.be.visible;
    });
    cy.get(obj.buttonNextPayment).should(element => {
        expect(element).to.be.visible;
    });
});