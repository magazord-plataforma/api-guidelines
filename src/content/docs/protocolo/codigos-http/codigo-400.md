---
title: 400 - Bad Request
---

O código HTTP `400` Indica que a solicitação está malformada, como um erro no formato do corpo da mensagem.

Requisição POST

```
POST pages HTTP/1.1
Accept: application/json

{
    "name": "Página de Produto",
}
```

Retorno HTTP

```
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "type": "https://dev.magazord.com.br/problems/invalid_parameters",
  "title": "Parâmetro obrigatório não fornecido",
  "detail": "O parâmetro obrigatório 'type' não foi fornecido"
  "status": 400
}
```