---
title: Rate Limit
---

O `Rate Limit` aborda quantas solicitações HTTP podem ser feitas em um determinado período. Este deve ser aplicado tanto a nível do cloud provider quanto a nivel do framework http utilizado pela aplicação.

> A API **DEVE** permitir a aplicação de Rate-Limit a nivel de um endpoint específico ou a nível de todas as rotas, sendo que as informações sobre o consumo do Rate-Limit devem ser fornecidas nos cabeçalhos HTTP de respostas de requisição.

Quando habilitado, a API **PODE** enviar cabeçalhos adicionais ao cliente informando quais são os limites permitidos, quantas solicitações estão disponíveis e quanto tempo levará até que a cota seja restaurada.

Exemplo exemplo de uma solicitação bem sucedida (2xx)

```
HTTP/1.1 200 OK
Content-Type: application/json
RateLimit-Limit: 6
RateLimit-Remaining: 4
RateLimit-Reset: 47
```


Quando os limites configurados na aplicação forem atingidos, a API **DEVE** retornar um código de status `429 Too Many Requests`:

```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
Retry-After: 25

{ "message": "API rate limit exceeded" }
```

Para esse caso, a API **DEVE** incluir o cabeçalho de resposta `Retry-After` contendo o tempo em `segundos` até que a mesma solicitação possa ser repetida.