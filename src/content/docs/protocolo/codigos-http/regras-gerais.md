---
title: Regras Gerais
---

Cada API **DEVE** usar os [Códigos de status HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) apropriados para comunicar o resultado de uma operação de solicitação.


| Código |  Nome                                                          | Descrição
|-----   |--------------------------------------------------------------- |---------------------------------------------------------------------------------------------------------------------------------------|
| 200    | [`OK`](/api-guidelines/protocolo/codigos-http/codigo-200)                     | Resposta a uma ação bem-sucedida da API REST.                                                                                         |
| 201    | [`Created`](/api-guidelines/protocolo/codigos-http/codigo-201)                | Indica que a ação foi bem-sucedida e um ou mais recursos foram criados.                                                               |
| 204    | [`No Content`](/api-guidelines/protocolo/codigos-http/codigo-204)             | Indica que a ação foi bem-sucedida e não há conteuído a ser encaminhado na resposta.                                                  |
| 400    | [`Bad Request`](/api-guidelines/protocolo/codigos-http/codigo-400)            | A solicitação está malformada, como um erro no formato do corpo da mensagem.                                                          |
| 401    | [`Unauthorized`](/api-guidelines/protocolo/codigos-http/codigo-401)           | ID/senha de autenticação incorretos ou inexistentes.                                                                                  |
| 403    | [`Forbidden`](/api-guidelines/protocolo/codigos-http/codigo-403)              | Usado quando a autenticação foi bem-sucedida, mas o usuário autenticado não tem permissão para acessar o recurso solicitado.          |
| 404    | [`Not Found`](/api-guidelines/protocolo/codigos-http/codigo-404)              | Quando um recurso inexistente é solicitado.                                                                                           |
| 405    | [`Method Not Allowed`](/api-guidelines/protocolo/codigos-http/codigo-405)     | A verificação de erro para um método HTTP inesperado. Por exemplo, a API REST está esperando HTTP GET, mas HTTP PUT está sendo usado. |
| 409    | [`Conflict`](/api-guidelines/protocolo/codigos-http/codigo-409)               | A solicitação não pode ser concluída por um conflito com com o estado atual do recurso sendo processado.                              |
| 429    | [`Too Many Requests`](/api-guidelines/protocolo/codigos-http/codigo-429)      | O erro é usado quando pode haver um ataque DOS detectado ou a solicitação é rejeitada devido ao Rate Limit.                           |
| 500    | [`Internal Server Error`](/api-guidelines/protocolo/codigos-http/codigo-500)  | O servidor encotrou um erro inesperado que impede o processamento da solicitação.                                                     |

A API **NÃO DEVE** usar apenas `200` para sucesso ou `404` para erro. Cada mensagem de erro precisa ser personalizada e aplicar o código de retorno de acordo com a sua semântica.


