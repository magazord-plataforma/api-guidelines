---
title: 200 - OK
---

O código HTTP `200` Indica que a ação foi bem-sucedida na API Rest

Requisição GET

```
GET pages/12358 HTTP/1.1
Accept: application/json
```

Retorno HTTP

```
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 12358,
    "name": "Página de Produto",
    "type": "product
}
```

> O código HTTP 200 pode ser aplicado tanto em cenários de consulta quanto de escrita