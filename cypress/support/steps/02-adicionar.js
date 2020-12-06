/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import PageAdicionar from '../pageobjects/pageAdicionar'
const PageTest = new PageAdicionar

Given(/^escolhi o produto que desejo comprar$/, () => {
	PageTest.escolherProduto()
});

When(/^clicar no botão Adicionar ao carrinho$/, () => {
	PageTest.clicarAdicionarCarrinho()
});

Then(/^o produto será adiconado.$/, () => {
    PageTest.validarCarrinho()
});
