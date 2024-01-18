# CRUD básico com Node.js usando Express

Este é um projeto simples de CRUD (Create, Read, Update, Delete) utilizando Node.js e SQLite. Ele permite realizar operações básicas em um banco de dados de produtos.

## Configuração Inicial

Para rodar este projeto, você precisa ter o Node.js instalado em seu ambiente. Após clonar este repositório, execute os seguintes comandos na raiz do projeto para instalar as dependências:

```bash
npm install
```

## Iniciando o Servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
node index.js
```
O servidor estará rodando na porta 3000. Acesse http://localhost:3000 para interagir com a API.

## Rotas da API
Este projeto contém as seguintes rotas:

- POST /api/produto: Adiciona um novo produto ao banco de dados.
- GET /api/produto: Retorna todos os produtos.
- PUT /api/produto/:id: Atualiza um produto pelo seu ID.
- DELETE /api/produto/:id: Deleta um produto pelo seu ID.

## Estrutura do Projeto
- index.js: Arquivo principal que inicia o servidor e configura as rotas.
- /routes: Diretório que contém as definições de rotas.
- /models: Diretório para os modelos de dados (opcional neste projeto).
- database.js: Configuração do banco de dados SQLite.

