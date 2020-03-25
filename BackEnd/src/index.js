const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Rota / recurso

Métodos HTTP
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: alterar uma informação no back-end
* Delete: deletar uma informação no back-end
*/

/*
Tipos de parâmetros
* Query Params: parâmetros nomeados enviados na rota após "?" (filtros, paginação) 
* Route Params: parâmetros utilizados para identificar recursos
* Request body: corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
Bancos de dados
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CoachDB, etc
*/

/*
* Driver: SELECT * FROM users
* QUery BUilder: tabela('users').seletc('*').where()
*/



app.listen(3333);
