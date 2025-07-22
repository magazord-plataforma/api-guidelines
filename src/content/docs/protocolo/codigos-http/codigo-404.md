---
title: 404 - Not Found
---

O código HTTP `404` é usado quando um recurso inexistente é solicitado

Requisição POST

```
GET /pages/123845 HTTP/1.1
Accept: application/json
```

Retorno HTTP

```
HTTP/1.1 404 Forbidden
Content-Type: application/json

{
  "type": "https://dev.magazord.com.br/problems/not_found",
  "title": "O recurso solicitado não existe",
  "detail": "A página solicitada não existe"
  "status": 404
}
```