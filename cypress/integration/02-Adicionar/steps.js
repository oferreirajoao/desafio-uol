/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import loc from '../../support/locators'

Given(/^escolhi o produto que desejo comprar$/, () => {
	cy.visit(loc.UOL.url)
    cy.get(loc.UOL.campo_buscar).type('Faded Short Sleeve{enter}')
    cy.get(loc.UOL.validar_resultado).should('contain', 'result has been found')
    cy.get(loc.UOL.seleecionar_produto).contains('Faded Short Sleeve').click()
    cy.get('body').should('contain', 'More info')
});

When(/^clicar no botão Adicionar ao carrinho$/, () => {
	cy.get('body').contains('Add to cart').click()
});

Then(/^o produto será adiconado.$/, () => {
    cy.get(loc.UOL.sucesso).should('contain', 'Product successfully added')
});
