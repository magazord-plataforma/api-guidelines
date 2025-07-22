---
title: 403 - Forbidden
---

O código HTTP `403` é usado quando a autenticação foi bem-sucedida, mas o usuário autenticado não tem permissão para acessar o recurso solicitado.

Requisição POST

```
POST /pages HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsI...
Accept: application/json

{
    "name": "Página de Produto",
    "type": "product
}
```

Retorno HTTP

```
HTTP/1.1 403 Forbidden
Content-Type: application/json

{
  "type": "https://dev.magazord.com.br/problems/forbidden",
  "title": "Não autorizado para acesso ao recurso",
  "detail": "Você não tem permissões para o Cadastro de Páginas"
  "status": 403
}
```