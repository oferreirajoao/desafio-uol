/// <reference types="cypress" />

import locators from '../elements/locators'
const loc = new locators
const url = Cypress.config("baseUrl")

class PageBuscar {

    acessarSite() {
        cy.visit(url)
    }

    inserirInformacao () {
        cy.get(loc.pesquisar()).type('Faded Short Sleeve')
    }

    realizarPesquisa () {
        cy.get(loc.pesquisar()).type('{enter}')
    }

    validarPesquisa () {
        cy.get(loc.validarPesquisa()).should('contain', 'result has been found')
    }

}
export default PageBuscar