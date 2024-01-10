<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<h3>Simple CRUD API used with Nest and Prisma, recognized for bringing productivity to day-to-day development in a team</h3>
<h4>Curl Examples for Crud:</h4>
<ul>
  <li>
    <span style="font-weight: 600;">Get</span>
    <article>curl --request GET \
      --url http://localhost:3003/book</article>    
    </li>
  <li>
  <span style="font-weight: 600;">Create</span>
  <article>curl --request POST \
  --url http://localhost:3003/book \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "Arquitetura limpa: o guia do artesão para estrutura e design de software",
	"description": "As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers Código Limpo e O Codificador Limpo, o lendário artesão de software Robert C. Martin (“Uncle Bob”) vai revelar essas regras e ajudar o leitor a aplicá-las.A Arquitetura Limpa de Martin não é só mais um catálogo de opções. Com base em meio século de experiência nos mais variados ambientes de software, Martin indica as escolhas que você deve fazer e explica por que elas são cruciais para o seu sucesso. Como já era esperado do Uncle Bob, este livro está cheio de soluções simples e diretas para os desafios reais que você enfrentará - aqueles que irão influenciar diretamente o sucesso ou fracasso dos seus projetos. Aprenda sobre as metas dos arquitetos de software - e as principais disciplinas e práticas que podem concretizá-las;Domine os princípios essenciais do design de software para abordar função, separação de componentes e gestão de dados;Veja como os paradigmas de programação impõem disciplina ao restringirem as ações dos desenvolvedores;Saiba identificar o que é crucialmente importante e o que é apenas um “detalhe”;Implemente estruturas ótimas e de alto nível para web, banco de dados, thick-client, console e aplicativos incorporados;Defina limites e camadas adequadas e organize os componentes e serviços;Saiba por que designs e arquiteturas dão errado e como prevenir (ou corrigir) essas falhas.",
	"bar_code": "9788550804606"
}'</article>    
  </li>
  <li>
  <span style="font-weight: 600;">Update</span>
  <article>curl --request PUT \
    --url http://localhost:3003/book/d66b22b5-8b24-4eda-9c46-f40ac1de8b53 \
    --header 'Content-Type: application/json' \
    --data '{
    "description": "As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software. Agora, aproveitando o sucesso dos seus best-sellers Código Limpo e O Codificador Limpo, o lendário artesão de software Robert C. Martin (“Uncle Bob”) vai revelar essas regras e ajudar o leitor a aplicá-las. A Arquitetura Limpa de Martin não é só mais um catálogo de opções. Com base em meio século de experiência nos mais variados ambientes de software, Martin indica as escolhas que você deve fazer e explica por que elas são cruciais para o seu sucesso. Como já era esperado do Uncle Bob, este livro está cheio de soluções simples e diretas para os desafios reais que você enfrentará - aqueles que irão influenciar diretamente o sucesso ou fracasso dos seus projetos. Aprenda sobre as metas dos arquitetos de software - e as principais disciplinas e práticas que podem concretizá-las;Domine os princípios essenciais do design de software para abordar função, separação de componentes e gestão de dados;Veja como os paradigmas de programação impõem disciplina ao restringirem as ações dos desenvolvedores;Saiba identificar o que é crucialmente importante e o que é apenas um “detalhe”;Implemente estruturas ótimas e de alto nível para web, banco de dados, thick-client, console e aplicativos incorporados;Defina limites e camadas adequadas e organize os componentes e serviços;Saiba por que designs e arquiteturas dão errado e como prevenir (ou corrigir) essas falhas"
  }'</article>    
  </li>
  <li>
  <span style="font-weight: 600;">Delete</span>
  <article>curl --request DELETE \
    --url http://localhost:3003/book/dc47637a-e3fb-4d4b-bb81-eaf49fd93658</article>    
  </li>
</ul>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
