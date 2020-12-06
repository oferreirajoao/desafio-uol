Feature: Buscar

    Como usuário, desejo buscar por um produto
    Para visualizar a opções disponíveis

Scenario: Realizar a busca por um produto
    Given que acesso o site
    When informar o que estou procurando no campo de busca
    And teclar enter ou clicar para pesquisar
    Then será retornada uma lista com os resultados