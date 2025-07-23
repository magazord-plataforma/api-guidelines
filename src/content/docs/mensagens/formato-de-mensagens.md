---
title: Formato de Mensagens
---

### Mensagens de Entrada

* Mensagens de solicitação com corpo **DEVEM** suportar o formato [`application/json`](https://datatracker.ietf.org/doc/html/rfc4627).
* Mensagens de solicitação **PODEM** também suportar o formato [``multipart/form-data``](https://www.ietf.org/rfc/rfc1867.txt).

### Mensagens de Saída

* Mensagens de resposta com corpo **DEVEM** suportar o formato [`application/json`](https://datatracker.ietf.org/doc/html/rfc4627).
* Mensagens de resposta com corpo binário **DEVEM** utilizar o formato [`binary/octet-stream`](https://datatracker.ietf.org/doc/html/rfc2046).


> Uma mensagem de saída deve representar exatamente o recurso solicitado sem uso de `envelopes`

```
GET pages/12358 HTTP/1.1
Accept: application/json

---

HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 12358,
    "name": "Página de Produto",
    "type": "product
}

```

### Mensagens de Erro

* Mensagens de resposta descrevendo [detalhes de erro](/api-guidelines/mensagens/detalhamento-de-erros) **DEVEM** utilizar o formato [`application/problem+json`](https://tools.ietf.org/html/rfc7807).

