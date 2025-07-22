---
title: Tipos de Dados
---

Os tipos comuns **DEVEM** ser definidos seguindo a especificação [OpenAPI](https://swagger.io/docs/specification/v3_0/data-models/data-types/):

| Tipo           | Especificação                                                                                             | Exemplo                                   |
| -------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| String         | [OAS3 - Strings](https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings)              | "foo"                                     |
| Boolean        | [OAS3 - Boolean](https://swagger.io/docs/specification/v3_0/data-models/data-types/#boolean)              | true                                      |
| Number         | [OAS3 - Numbers](https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers)              | 2025                                      |
| Integer        | [OAS3 - Numbers](https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers)              | 7                                         |
| Array          | [OAS3 - Arrays](https://swagger.io/docs/specification/v3_0/data-models/data-types/#arrays)                | ["foo", 5, -2, "bar"]                     |
| Object         | [OAS3 - Objects](https://swagger.io/docs/specification/v3_0/data-models/data-types/#objects)              |  {"key": "value"}                         |

Os tipos de Data e Data e Hora **DEVEM** devem seguir a sua respectiva RFC:

| Tipo           | Especificação                                                            | Exemplo                                   |
| -------------- | ------------------------------------------------------------------------ | ----------------------------------------- |
| Data e Hora    | [OAS3 - Strings](https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings) / [RFC - 3339](https://datatracker.ietf.org/doc/html/rfc3339) | Exemplo: "2025-07-21T10:30:00-03:00" <br/> * O valor *Offset Local* <strong>DEVE</strong> ser incluído |
| Data           | [OAS3 - Strings](https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings) / [RFC - 3339](https://datatracker.ietf.org/doc/html/rfc3339) | "2025-06-21"                 |

O tipo Arquivo **PODE** apresentar dois comportamentos distintintos de acordo com o *Content-Type* aplicado:


| Tipo           | Especificação                                                                                        | Ocorrência | Exemplo                                             |
| -------------- | ---------------------------------------------------------------------------------------------------- | -----------| ----------------------------------------------------| 
| Arquivo        | [OAS3 - Files](https://swagger.io/docs/specification/v3_0/describing-request-body/file-upload/) | Upload     | [multipart/form-data](/execucao/upload-de-arquivos) |
| Arquivo        | [OAS3 - Strings](https://swagger.io/docs/specification/v3_0/data-models/data-types/#boolean)         | Upload     | [application/json](/execucao/upload-de-arquivos)    |
| Arquivo        | [OAS3 - Files](https://swagger.io/docs/specification/v3_0/describing-request-body/file-upload/) | Download     | [application/octet-stream](/execucao/download-de-arquivos) |
| Arquivo        | [OAS3 - Strings](https://swagger.io/docs/specification/v3_0/data-models/data-types/#boolean)         | Download     | [application/json](/execucao/download-de-arquivos)    |