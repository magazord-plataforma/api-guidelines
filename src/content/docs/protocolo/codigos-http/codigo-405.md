---
title: 405 - Method Not Allowed
---

O código HTTP `405` é usado para indicar um erro por método HTTP inesperado. 

> Por exemplo, a API REST está esperando HTTP GET, mas HTTP PUT está sendo usado.

Requisição POST

```
PUT /reports/123845/download HTTP/1.1
Accept: application/pdf
```

Retorno HTTP

```
HTTP/1.1 405 Method Not Allowed
Content-Type: application/json

{
  "type": "https://dev.magazord.com.br/problems/method_not_allowed",
  "title": "O método não está habilitado para o recurso solicitado",
  "detail": "O método não está habilitado para o recurso solicitado"
  "status": 405
}
```