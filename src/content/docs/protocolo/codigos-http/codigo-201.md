---
title: 201 - Created
---

O código HTTP `201` Indica que a ação foi bem-sucedida e um ou mais recursos foram criados

Requisição POST

```
POST pages HTTP/1.1
Accept: application/json

{
    "name": "Página de Produto",
    "type": "product
}
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