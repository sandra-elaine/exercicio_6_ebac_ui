/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            // Pegar o primeiro item da lista
            //.first()

            // Pegar o último item da lista
            //.last()

            // Pega um item específico da lista(0,1,2,3,...)
            //.eq(3)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
    });
    it('Deve adicionar um produto no carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
            cy.get('.button-variable-item-M').click()
                cy.get('.button-variable-item-Green').click()
                cy.get('.input-text').clear().type(quantidade)
                cy.get('.single_add_to_cart_button').click()

                cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
                
    });

});
