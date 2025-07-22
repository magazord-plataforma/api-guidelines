---
title: Detalhamento de Erros
---

Os códigos de status HTTP muitas vezes não são suficientes para transmitir informações suficientes sobre um erro a ponto de serem úteis para a sua interpretação. Informações contextuais sobre o erro **DEVEM** ser incluídas no corpo da resposta.

O [RFC7807 - Problem Details](https://tools.ietf.org/html/rfc7807) **DEVE** ser usado como base para construír a representação e comunicar detalhes sobre esses erros em mensagens cujo status HTTP tenho resultado entre `4xx` e `5xx`. 

Em sua forma mais básica o RFC específica que qualquer resposta de Detalhes do Problema **DEVE** ter no mínimo os campos `title` e `detail`. A especificação ainda prevê os campos `type` e `status`.

```javascript
{
  "title": "Autenticação obrigatória",
  "detail": "Autenticação obrigatória para acesso ao recurso"
}
```

Se presente, o campo `type` **DEVE** com o identificador do erro. Se a resposta de Detalhes do Problema tiver o campo `status`, este **DEVE** ter o mesmo valor que o código de status HTTP da resposta.

```javascript
{
  "type": "https://dev.magazord.com.br/problems/unauthorized",
  "title": "Autenticação obrigatória",
  "detail": "Autenticação obrigatória para acesso ao recurso"
  "status": 401
}
```

> O campo de `type` é um identificador e como tal pode ser usado para indicar códigos de erro adicionais

## Erros compostos

Quando necessário, uma resposta de Detalhes do Problema pode incluir detalhes adicionais sobre os problemas ocorridos. Esses erros adicionais **DEVEM** estar na coleção de nome `erros` e **DEVEM** seguir a estrutura definida pelo RFC.

Requisição:

```
POST /orders HTTP/1.1
Content-Type: application/json

{
  "total": -3200,
  "product": "Notebook"
}
```

Resposta:

```
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json

{
  "type": "https://dev.magazord.com.br/problems/validation_error",
  "title": "Os parâmetros da sua requisição são inválidos",
  "status": 400,

  "errors": [
    {
      "type": "https://dev.magazord.com.br/problems/invalid_params",
      "title": "Parâmetro inválido",
      "detail": "total deve um número positivo"
    },
  ]
}
```