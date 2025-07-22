---
title: Paginação
---

A paginação é crucial no design de qualquer API de modo a permitir a manipulação de um grande volume de dados em coleções de maneira eficiente.

A API **DEVE** implementar uma paginação orientada ao número da *Página* solicitada bem como possibilitar estabelecer um *Limite* ao número de registros retornados a cada página.

Ambos o número da Página e o Limite de registros por página **DEVEM** ser fornecidos como *Query Parameters* `page`e `limit`, respectivamente, para o endpoint de consulta da coleção.

* `page` deve ser um valor opcional, maior do que zero, assumindo `1` como valor padrão.
* `limit` deve ser um valor opcional, maior do que zero, sendo seu padrão razoável para o contexto da coleção.

Quanto a representação do resultado da consulta, esta **DEVE** fornecer no mínimo os seguintes campos para a paginação orientada ao número de Página:

* **items**: a coleção de objetos resultado da operação de consulta
* **pageCount**: a quantidade de registros na página atual
* **page**: a página representando a operação atual de consulta
* **limit**: o limite de registros na página atual
* **total**: o total de registros não considerando a paginação
* **totalPages**: a quantidade de páginas abrangendo o total de registros
* **hasMore**: indicador de existencia de próxima página para consulta

## Exemplo

Obtendo uma coleção de usuarios usando parametros de página e limite.

Requisição GET

```
GET /users?page=4&limit=2 HTTP/1.1
Accept: application/json
```

Resposta HTTP

```
HTTP/1.1 200 OK
Content-Type: application/json

{    
  "items": [
    {
      "id": 7,
      "email": "arthur@magazord.com.br",
      "name": "Arthur"
    },
    {
      "id": 8,
      "email": "lais@magazord.com.br",
      "name": "Lais"
    }
  ],
  "pageCount": 2,
  "page": 4,
  "limit": 2,
  "total": 30,
  "totalPages": 15,
  "hasMore": true
}
```