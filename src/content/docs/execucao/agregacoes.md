---
title: Agregações
---

### Realizando cálculos sobre os dados

Toda API **PODE** disponibilizar um endpoint dedicado a realização de cálculos de agregação sobre os dados da coleção, permitindo operações como soma, média, contagem, mínimo e máximo.

Caso a API ofereça suporte a agregações, **DEVE** disponibilizar um endpoint denominado `agg` abaixo da coleção que está sendo consultada, acessada pelo método POST.

### Estrutura da Requisição

O corpo da requisição **DEVE** conter a definição das agregações a serem realizadas.

```bash
$ curl -X POST -H "Content-Type: application/json" https://dev.magazord.com.br/orders/agg -d 
'{
  "aggregations": [
    {
      "field": "total",
      "operator": "sum"
    },
    {
      "field": "id",
      "operator": "count"
    }
  ],
  "filters": [
    {
      "field": "createdAt",
      "operator": "gte",
      "value": "2025-01-01T00:00:00"
    }
  ]
}'
```

#### Parâmetros do Corpo

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `aggregations` | Array | Sim | Lista de objetos definindo as operações de agregação. |
| `filters` | Array | Não | Lista de filtros a serem aplicados antes da agregação (segue o padrão de [Consultas](/api-guidelines/execucao/consultas)). |

#### Objeto de Agregação

Cada item na lista de `aggregations` **DEVE** possuir a seguinte estrutura:

| Campo     | Tipo | Obrigatório | Descrição                                                                      |
|-----------|---|---|--------------------------------------------------------------------------------|
| `field`   | String | Sim | O campo sobre o qual a operação será aplicada.                                 |
| `operator` | String | Sim | A operação de agregação a ser utilizada (`sum`, `avg`, `min`, `max`, `count`). |

### Funções de Agregação Suportadas

A API **DEVE** suportar as seguintes operações:

| Operação | Descrição |
|----------|---|
| `sum`    | Soma os valores do campo especificado. |
| `avg`    | Calcula a média aritmética dos valores. |
| `min`    | Encontra o valor mínimo. |
| `max`    | Encontra o valor máximo. |
| `count`  | Conta o número de registros. |

### Resposta

A resposta **DEVE** ser um array contendo um objeto para cada agregação solicitada.

Cada objeto **DEVE** possuir os seguintes campos:

* **field**: o nome do campo agregado
* **operator**: a operação aplicada sobre o campo
* **value**: o resultado calculado pela operação

#### Exemplo de Resposta

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "field": "total",
    "operator": "sum",
    "value": 20000.50
  },
  {
    "field": "id",
    "operator": "count",
    "value": 195
  }
]
```