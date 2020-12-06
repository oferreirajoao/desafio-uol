# Avaliação: Automação Web com Cypress

## Descrição do testes

Teste automatizado com Cypress e Cucumber utilizando Gherkin (descrição dos cenários) para o seguinte fluxo de ponta a ponta (E2E):

1 - Entrar no e-commerce http://automationpractice.com/

2 - Realizar a busca pelo produto: "Faded Short Sleeve"

3 - Validar o retorno da busca

4 - Selecionar o primeiro produto comprável (disponível no estoque) a partir dos resultados

5 - Adicionar o produto ao carrinho

6 - Validar se o produto foi adicionado ao carrinho com sucesso

7 - Acessar o carrinho para vizualizar o produto

## Ferramentas

- [`Cypress`](https://on.cypress.io): Framework para realizar testes automatizados.
- [`Cucumber`](https://cucumber.io/): Framework para desenvolvimento orientado pelo comportamento (BDD).
- [`Gherkin`](https://cucumber.io/docs/gherkin/reference/): Linguagem específica para descrever comportamentos.

## Configuração do ambiente

> É necessário ter o [Node.JS](https://nodejs.org/en/download/) instalado!

Na pasta do projeto, abra o terminal e instale as depedências utilizando o comando:

```bash
npm install
```

> A versão do Cypress utilizada durante a criação e execução dos testes foi a 6.0.1. Com intuito de evitar erros durante futuras execuções deste teste (devido a mudanças e atualizações), ao executar o comando acima a versão indicada será instalada.

## Execução dos testes

### Via Interface

Após instalar as dependências, com o terminal na pasta do projeto e execute o comando:

```bash
npm run cy.open
```

Aguarde até que a interface do Cypress seja carregado.

Com a interface aberta, clique em [Run 2 integration specs](./image/interface_cypress.png) para que todos os testes sejam executados.

> Além disso, é possível executar os testes de modo independente. Para executar apenas a feature de busca, na tela do Cypress, basta clicar em *"01-buscar.feature"*. Ou então, para executar apenas a feature de adicionar produto ao carrinho, basta clicar em *"02-adicionar.feature"*.

### Via Terminal

Após instalar as dependências, com o terminal na pasta do projeto e execute o comando:

```bash
npm run cy.run
```

Aguarde até que a mensagem de [Run Finished](./image/resultado-final-terminal.png) seja exibida no terminal, indicando que a execução dos testes foi finalizada.

## Observação

O arquivo [resultado-final.png](./image/resultado-final.png) exibe o resultado final após a execução dos testes via interface. Onde é possível observar que o Cypress levou 12.81 segundos para executar o fluxo de teste descrito.

> O Cypress é uma ferramente nova, então, durante a primeira execução do teste, erros podem ocorrer devido ao timeout (tempo para carregar a página, tempo para o elemento ficar visível na tela), tempo elevado para finalizar a execução, entre outros. Recomenda-se então que os testes sejam executados novamente.