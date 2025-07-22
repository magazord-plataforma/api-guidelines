---
title: 401 - Unauthorized
---

O código HTTP `401` Indica que ID/senha de autenticação incorretos ou inexistentes.

Requisição POST

```
POST /login HTTP/1.1
Accept: application/json

{
    "username": "arthur@magazord.com.br",
    "password": "wrong-password-here"
}
```

Retorno HTTP

```
HTTP/1.1 401 Unauthorized
Content-Type: application/json

{
  "type": "https://dev.magazord.com.br/problems/unauthorized",
  "title": "Credenciais inválidas",
  "detail": "Usuário e ou senha inválido"
  "status": 401
}
```