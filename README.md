# Avaliação: Automação Web Cypress

## Descrição do testes

Teste automatizado com Cypress e Cucumber utilizando Gherkin (descrição dos cenários) para o seguinte fluxo de ponta a ponta (E2E):

1 - Entrar no e-commerce http://automationpractice.com/

2 - Realizar a busca pelo produto: "Faded Short Sleeve"

3 - Validar o retorno da busca

4 - Selecionar o primeiro produto comprável a partir dos resultados

5 - Adicionar o produto ao carrinho

6 - Validar se o produto foi adicionado ao carrinho com sucesso

## Ferramentas

- [`Cypress`](https://on.cypress.io): Framework para realizar testes automatizados.
- [`Cucumber`](https://cucumber.io/): Framework para desenvolvimento orientado pelo comportamento (BDD).
- [`Gherkin](https://cucumber.io/docs/gherkin/reference/): Linguagem específica para descrever comportamentos.

## Configuração do ambiente

> É necessário ter o [Node.JS](https://nodejs.org/en/download/) instalado!

Na pasta do projeto, abra o terminal e instale as depedências utilizando o comando:

```bash
npm install
```

> A versão do Cypress utilizada durante a criação e execução dos testes foi a 6.0.1. Com intuito de evitar erros durante futuras execuções deste teste (devido a mudanças e atualizações), ao executar o comando acima a versão indicada será instalada.

## Execução do teste

Após realizar o passo anterior, com o terminal na pasta do projeto e execute o comando:

```bash
npm run cy.open
```

Aguarde até que o Dashboard do Cypress seja carregado.

Na tela que será carregada, clique em **_RUN 2 INTEGRATION SPECS_** (localizado no canto superior direito da Dashboard do Cypress) para que todos os testes sejam executados.

> Além disso, é possível executar os testes de modo independente. Para executar apenas a feature de busca, na tela do Cypress, basta clicar em *"01-buscar.feature"*. Ou então, para executar apenas a feature de adicionar produto ao carrinho, basta clicar em *"02-adicionar.feature"*.

## Observação

O arquivo [resultado-final-do-teste.png](./resultado-final-do-teste.png) exibe o resultado final após a execução dos testes. Onde é possível observar que o Cypress levou 09.01 segundos para executar o fluxo de teste descrito.

> O Cypress é uma ferramente nova, então, durante a primeira execução do teste, erros podem ocorrer devido ao timeout (tempo para carregar a página, tempo para o elemento ficar visível na tela), tempo elevado para finalizar a execução, entre outros. Recomenda-se, então, que o teste seja executado novamente.