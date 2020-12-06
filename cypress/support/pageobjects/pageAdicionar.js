/// <reference types="cypress" />

import locators from '../elements/locators'
const loc = new locators
const url = Cypress.config("baseUrl")

class PageAdicionar {

    escolherProduto() {
        cy.visit(url)
        cy.get(loc.pesquisar()).type('Faded Short Sleeve{enter}')
        cy.get(loc.validarPesquisa()).should('contain', 'result has been found')
        cy.get(loc.disponivelEstoque()).should('exist')
        cy.get(loc.informacaoProduto()).click()
    }

    clicarAdicionarCarrinho() {
        cy.get(loc.adicionarCarrinho()).contains('Add to cart').click()
    }

    validarCarrinho() {   
        cy.get(loc.validarCarrinho()).should('contain', 'Product successfully added')
        cy.get(loc.acessarCarrinho()).click()
        cy.get(loc.visualizarProduto()).should('contain', '1 Product')
    }

}
export default PageAdicionar