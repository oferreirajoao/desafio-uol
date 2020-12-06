Feature: Adicionar

    Como usuário, ao escolher o produto quero adicioná-lo ao carrinho
    Para efeturar a compra

Scenario: Adicionar o produto desejado ao carrinho
    Given escolhi o produto que desejo comprar
    When clicar no botão Adicionar ao carrinho
    Then o produto será adiconado.