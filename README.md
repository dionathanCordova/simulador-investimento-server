<div align="center" id="top"> 
  <img src="./.github/icon-preview2.png" alt="App simulador investimentos" />

  &#xa0;

  <!-- <a href="https://appcurriculoweb.netlify.app">Demo</a> -->
</div>

<h1 align="center">App Simulador de Investimentos</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/dionathanCordova/simulador-investimento-web?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/dionathanCordova/simulador-investimento-web?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dionathanCordova/simulador-investimento-web?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/dionathanCordova/simulador-investimento-web?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/dionathanCordova/simulador-investimento-web?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/dionathanCordova/simulador-investimento-web?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/dionathanCordova/simulador-investimento-web?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  App Curriculo Web 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requeriments</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/dionathanCordova" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Projeto web de um simulador de investimento comparando a taxa de rendimento de um CDB com a poupança

## :sparkles: Features ##

:heavy_check_mark: Planejamento - Busca por referências, no que diz sobre calculo e taxas de investimentos de CDB e poupança.

:heavy_check_mark: Elaboração - Optei por manter o projeto em dois(2) repositórios, onde o primeiro se trata do backend da aplicação usando Node, typescript e Postgre para armazenar os dados.
E o segundo se trata do front-end, usando reactJs e typescript.

:heavy_check_mark: Execução - A aplicação foi feita em uma espécia de land page, contendo quase tudo na pagina inicial, só foi separada em uma outra página a parte onde o usuário informa os dados pessoas ( nome, telefone e email ).

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Typeorm](https://typeorm.io/#/)

## :white_check_mark: Requeriments ##

Antes de começar :checkered_flag:, você precisa do [Git](https://git-scm.com), [Docker](https://www.docker.com/) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Starting ##

```bash
# Clone estes projetos
$ git clone https://github.com/dionathanCordova/simulador-investimento-server

# Acesse
$ cd simulador-investimento-server

# Instale as dependências
$ yarn

# Rode o seguinte comando no terminal para criar um container do DB postgres
$ docker run --name postgres_container -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Execute o comando docker ps no terminal e confira se existe um container 
# chamado postgres_container rodando
$ docker ps

# Acesse o db através de qualquer SGBD com as seguintes credenciais: 
# usuario = postgres, password = docker, porta = 5432
# Crie um novo schemma chamado "testeqi"

# PS: Note que para ajudar o .env já está com todas as credenciais de conexão, 
# não sendo o ideal em um ambiente de produção, mas neste caso resolvi deixar 
# tudo ali disponível já que a configuração do typeorm vai buscar as credenciais de acesso neste arquivo.

# No terminal rode o seguinte comando que se encarregará de criar as tabelas no DB
$ yarn typeorm migration:run

# Execute o projeto
$ yarn dev:server 

# Se no console aparecer a mensagem "Server started at port: 3333",
# tudo está rodando sem problema, e o servidor já estará funcionando perfeitamente.

# Clone o projeto web
$ git clone https://github.com/dionathanCordova/simulador-investimento-web

# Access
$ cd simulador-investimento-web

# Instale as dependências
$ yarn

# Run the project
$ yarn start

# O projeto irá ser iniciado na url <http://localhost:3000>
```

## :memo: Referências ##

1 - Congo Mariana em Rentabilidade líquida do CDB: veja como calcular o rendimento da sua aplicação https://blog.magnetis.com.br/rentabilidade-liquida-cdb/

2 - Tech Informática em Como Calcular a Rentabilidade Bruta do CDB Com Um Investimento de R$10 Mil - https://www.youtube.com/watch?v=4vIbp-6NmP0

3 - Rico em Simulador de CDB Pós-fixado e Prefixado: Calcule o Rendimento Hoje - https://blog.rico.com.vc/simulador-cdb#:~:text=CDB%20H%C3%ADbrido,do%20IPCA%20para%20o%20per%C3%ADodo.

4 - Takar Téo em Saiba calcular o rendimento real de investimentos e pare de perder dinheiro - https://economia.uol.com.br/financas-pessoais/noticias/redacao/2018/08/14/como-calcular-rendimento-real-de-investimento.htm#:~:text=Como%20calcular%20ganho%20de%20CDB,100)%20%3D%207%2C67%25

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made by <a href="https://github.com/dionathanCordova" target="_blank">Dionathan de Córdova</a>

&#xa0;

<a href="#top">Back to top</a>
