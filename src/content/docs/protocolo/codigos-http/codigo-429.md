---
title: 429 - Too Many Requests
---

O código HTTP `429` é usado quando pode haver um ataque DOS detectado ou a solicitação é rejeitada devido ao Rate Limit.

Requisição POST

```
POST /stock/inventory HTTP/1.1
Accept: application/json

{
    "inventoryId": 2,
    "productId": 325,
    "type": "in",
    "quantity": 6
}
```

Retorno HTTP

```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
Retry-After: 25

{
  "type": "https://dev.magazord.com.br/problems/too_many_requests",
  "title": "Limite de uso da API excedido",
  "detail": "Limite de uso da API excedido"
  "status": 429
}
```
