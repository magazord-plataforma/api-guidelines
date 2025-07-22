---
title: 204 - No Content
---

O código HTTP `204` Indica que a ação foi bem-sucedida e não há conteuído a ser encaminhado na resposta.

Requisição DELETE

```
DELETE pages/12358 HTTP/1.1
Accept: application/json
```

Retorno HTTP

```
HTTP/1.1 204 OK
```

> Aplicação comum em cenários de remoção de registros ou agendamento de operações onde não há retorno.