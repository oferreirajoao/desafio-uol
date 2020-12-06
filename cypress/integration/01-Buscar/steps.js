/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import loc from '../../support/locators'

Given(/^que acesso o site$/, () => {
	cy.visit(loc.UOL.url)
});

When(/^informar o que estou procurando no campo de busca$/, () => {
	cy.get(loc.UOL.campo_buscar).type('Faded Short Sleeve')
});

When(/^teclar enter ou clicar para pesquisar$/, () => {
	cy.get(loc.UOL.campo_buscar).type('{enter}')
});

Then(/^será retornada uma lista com os resultados$/, () => {
	cy.get(loc.UOL.validar_resultado).should('contain', 'result has been found')
});

