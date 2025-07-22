---
title: 409 - Conflict
---

O código HTTP `409` Indica que a solicitação não pode ser concluída por um conflito com com o estado atual do recurso sendo processado.

Requisição POST

```
POST products HTTP/1.1
Accept: application/json

{
    "name": "Garrafa Térmica",
    "code": "GRF0125"
}
```

Retorno HTTP

```
HTTP/1.1 409 Conflict
Content-Type: application/json

{
  "type": "https://dev.magazord.com.br/problems/conflict",
  "title": "O recurso a ser cadastrado já existe",
  "detail": "Já existe produto para o mesmo código"
  "status": 409
}
```