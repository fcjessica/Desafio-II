/// <reference types="cypress" />

describe('Buscas', () =>{

    beforeEach(() => {
        cy.visit('https://buscacepinter.correios.com.br/')
    });
    it('Deve realizar a busca com o valor 69005-040', () => {
        cy.get('#endereco').type('69005-040')
        cy.get('#tipoCEP')
        cy.get('#btn_pesquisar').click()
        cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should('contain' , 'Rua Miranda Leão')   
    })
    it('Deve realizar a busca com o valor Lojas Bemol', () => {
        cy.get('#endereco').type('Lojas Bemol')
        cy.get('#tipoCEP')
        cy.get('#btn_pesquisar').click()
        cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should('contain' , 'Rua Miranda Leão, 41')
           
    })
})