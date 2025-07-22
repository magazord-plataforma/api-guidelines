---
title: 500 - Internal Server Error
---

O código HTTP `500` é usado quando o servidor encontrou um erro inesperado que impede o processamento da solicitação.

A API **NÂO DEVE** lançar a nivel de dominío / regra de negócio erros com código 500. O Código 500 representa uma situação exceptional a qual a aplicação não foi capaz de tratar.

> O erro de código 500 deve ser lançado no nível mais alto da stack de tratamento de erros da aplicação, no handler global de erro quando não for identificado o *motivo* da falha.

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
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "type": "https://dev.magazord.com.br/problems/internal_server_erro",
  "title": "Erro inesperado",
  "detail": "Erro inesperado"
  "status": 500
}
```