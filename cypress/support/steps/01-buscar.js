/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import PageBuscar from '../pageobjects/pageBusucar'
const PageTest = new PageBuscar

Given(/^que acesso o site$/, () => {
	PageTest.acessarSite()
});

When(/^informar o que estou procurando no campo de busca$/, () => {
	PageTest.inserirInformacao()
});

When(/^teclar enter ou clicar para pesquisar$/, () => {
	PageTest.realizarPesquisa()
});

Then(/^será retornada uma lista com os resultados$/, () => {
	PageTest.validarPesquisa()
});

