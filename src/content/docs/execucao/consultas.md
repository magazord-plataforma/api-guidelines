---
title: Consultas
---

### Aplicando filtros simples para obtenção de resultados 

Toda API **DEVE** disponibilizar para um endpoint de consulta a estratégia `Simples` de especificação de filtros.

Cada parâmetro de busca simples **DEVE** ser fornecido na forma de `chave=valor` como um [Query Parameter](https://datatracker.ietf.org/doc/html/rfc3986). 

```
https://dev.magazord.com.br.com/user/orders?status=pending
```

Um filtro simples **DEVE** considerar apenas o operador de igualdade (`=`).


### Aplicando filtros compostos para casos de uso dinâmicos

Os filtros compostos são utilizados em cenários de interface onde os dados devem se adaptar ao caso de uso do usuário sendo que o fitro de igualdade não é suficiente para o dinamismo da interface.

Para esse a API **PODE**  disponibilizar um endoint de nome `query` abaixo da coleção que está sendo consultada, acessada pelo método POST tendo os flitros complexos fornecidos no body da requisição:

```bash
$ curl -X POST -H "Content-Type: application/json" https://dev.magazord.com.br.com/user/orders/query -d 
'{
  "filters": [
    {
      "field": "status",
      "operator": "eq",
      "value": "pending"
    },
    {
      "field": "createdAt",
      "operator": "between",
      "value": ["2025-07-21T20:16:17", "2025-07-21T20:16:17"]
    },
    {
      "field": "total",
      "operator": "gt",
      "value": 2535.75
    }
  ],
  "sorters": [
    {
      "field": "id",
      "direction": "desc"
    }
  ]
}'
```

> O corpo em JSON reduz a complexidade tanto na construção quanto no parse do corpo da requisição, também atuando como mecanismo para contornar a limitação do tamanho de query especificado pelos servidores http.

### Operadores disponíveis consulta

Uma API que disponibiliza filtros complexos **DEVE** disponibilizar os seguintes operadores:

| Operador | Descrição                                                 | Exemplo                                           |
| ---------| ----------------------------------------------------------| ------------------------------------------------- |
| `eq`     | Um valor `a` deve ser igual a um valor `b`                | {<br/>&nbsp;&nbsp;"field": "nome", <br/>&nbsp;&nbsp;"operator": "eq", <br/>&nbsp;&nbsp;"value": "Arthur" <br/>}    |
| `ne`     | Um valor `a` não pode ser igual a um valor `b`            | {<br/>&nbsp;&nbsp;"field": "status", <br/>&nbsp;&nbsp;"operator": "ne", <br/>&nbsp;&nbsp;"value": "Pending" <br/>}     |
| `gt`     | Um valor `a` deve ser maior do que um valor `b`           | {<br/>&nbsp;&nbsp;"field": "total", <br/>&nbsp;&nbsp;"operator": "gt", <br/>&nbsp;&nbsp;"value": 235.75 <br/>}     |
| `gte`    | Um valor `a` deve ser maior ou igual a um valor `b`       | {<br/>&nbsp;&nbsp;"field": "percent", <br/>&nbsp;&nbsp;"operator": "gte", <br/>&nbsp;&nbsp;"value": 50 <br/>}     |
| `lt`     | Um valor `a` deve ser menor do que um valor `b`           | {<br/>&nbsp;&nbsp;"field": "stock", <br/>&nbsp;&nbsp;"operator": "lt", <br/>&nbsp;&nbsp;"value": 10 <br/>}     |
| `lte`    | Um valor `a` deve ser menor ou igual a um valor `b`       | {<br/>&nbsp;&nbsp;"field": "amount", <br/>&nbsp;&nbsp;"operator": "lte", <br/>&nbsp;&nbsp;"value": 26 <br/>}    |
| `in`     | Um valor `a` deve estar contido em uma listagem `c`       | {<br/>&nbsp;&nbsp;"field": "status", <br/>&nbsp;&nbsp;"operator": "in", <br/>&nbsp;&nbsp;"value": ["completed", "approved"] <br/>}    |
| `like`   | Um valor `a` deve corresponder a um padrão de texto `d`   | {<br/>&nbsp;&nbsp;"field": "title", <br/>&nbsp;&nbsp;"operator": "like", <br/>&nbsp;&nbsp;"value": "Televisor Semp.*" <br/>}    |
| `between` | Um valor `a` deve estar contido em um intervalo entre `b`e `c`   | {<br/>&nbsp;&nbsp;"field": "createdAt", <br/>&nbsp;&nbsp;"operator": "between", <br/>&nbsp;&nbsp;"value": [<br/>&nbsp;&nbsp;&nbsp;"2025-07-21T20:16:17",<br/>&nbsp;&nbsp;&nbsp; "2025-07-21T20:16:17"<br/>&nbsp;&nbsp;&nbsp;] <br/>}    |

> O valor aplicado ao campo **value** do filtro complexo **DEVE** em cada operador respeitar o [Tipo de Dado](/diretrizes-gerais/tipos-de-dados) definido para ao campo utilizado para o filtro.

## Personalizando o resultado

Todo endpoint de consulta **PODE** disponibilizar estratégias de personalização do resultado de modo a permitir ao consumidor escolher os campos retornados para melhor atender o seu caso de uso.

As estratégias de personalização devem possibilitar *escolher* os campos a serem exibidos no resultado, seja *omitindo* (`omit`) algum campo ou *limitando* (`select`) a uma relação.


### Selecionando os campos da consulta

Toda API de consulta **PODE** implementar o atributo `select` cujo valor deve ser uma lista separada por vírgulas definindo os campos a serem retornados na consulta.

Ao receber tal solicitação o serviço **DEVE** responder com uma mensagem que inclua *apenas* os campos especificados no parâmetro `select`.

Requsição GET

```
GET /user/1234?select=name,email HTTP/1.1
Accept: application/json
```

Requsição POST

```
POST /users/query HTTP/1.1
Accept: application/json

{
  "select": ["name", "email"]
}
```

Resposta HTTP

```
HTTP/1.1 200 OK
Content-Type: application/json

[{  
  "name": "Arthur",
  "email": "arthur@magazord.com.br"
}]
```

### Omitindo os campos da consulta

Toda API de consulta **PODE** implementar o atributo `omit` cujo valor deve ser uma lista separada por vírgulas definindo os campos a serem ocultados na consulta.

Ao receber tal solicitação o serviço **DEVE** responder com uma mensagem com a representação do recurso solicutado excluindo os campos especificados no parâmetro `omit`.

Requsição GET

```
GET /user/1234?omit=name,email HTTP/1.1
Accept: application/json
```

Requsição POST

```
POST /users/query HTTP/1.1
Accept: application/json

{
  "omit": ["name", "email"]
}
```

Resposta HTTP

```
HTTP/1.1 200 OK
Content-Type: application/json

[{  
    "id": 10,
    "type": 1,
    "status": "active",
    "updatedAt": "2025-07-21T20:16:17",
    "createdAt": "2025-07-21T20:16:17"
}]
```

### Populando campos de relacionamento

Algumas APIs de consulta podem ter o seu resultado composto pela combinação de múltiplas *entidades* em sua base de dados, seja por *joins* em bancos relacionais ou *lookups* em bancos não relacionais (ex):

 * Consulta de *clientes* composta pelas suas *informações básicas* e seus *endereços*.
 * Consulta de *pedidos* composta pelas suas *informações básicas*, seus *rastreios*, seus *produtos* e seu *historico*.

As consultas compostas por múltiplas entidades são necessárias, porém não mandatórias para todo caso de uso ou todo usuário que venha a consumir o endpoint de consulta.

> Consultas envolvendo múltiplas entidades tendem a ser custosas para o backend, envolvendo múltiplas operações e resultado em carga para a base de dados quando mal implementadas.

Portanto, uma API de consulta **NÃO DEVE** incluir na *representação padrão* de seu resultado os relacionamentos que venham a compor o seu retorno, ou seja:

* Consulta de *clientes* **DEVE** retornar *apenas* as suas informações básicas, incluindo os endereços apenas se solicitado.
* Consulta de *pedidos* **DEVE** retornar *apenas* as suas informações básicas, incluindo *rastreios*, *produtos* e *historico* apenas se solicitado.

A API **DEVE** *popular* os grupos de informações relacionados a outras entidades no retorno da API orientada ao atributo `populate`, uma lista separada por vírgulas definindo os campos de relacionamento a serem populados na consulta.


Requsição GET
```
GET /clients?select=name,email&populate=address HTTP/1.1
Accept: application/json
```

Requisição POST

```
POST /clients/query HTTP/1.1
Accept: application/json

{
  "select": ["name", "email"],
  "populate": ["address"]
}
```

Resposta HTTP

```
[{
  "name": "Arthur",
  "email": "arthur@magazord.com.br",
  "address": {
    "id": 1,
    "city": "Rio do Sul",
    "state": "SC",
    "country": "Brasil
  }
}]

```