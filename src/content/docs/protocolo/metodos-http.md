---
title: Métodos HTTP
---

Cada API **DEVE** usar [métodos de solicitação HTTP](https://github.com/for-GET/know-your-http-well/blob/master/methods.md) apropriados para cada operação seguindo a sua respectiva semântica.

Método   | Descrição   | Seguro | Idempotente   | Cacheavel |
--------:| :---------- | :--: | :---:   | :----: |
`GET`    | Obtém um recurso a partir do servidor de origem                                                 | ✔ | ✔ | ✔ | 
`POST`   | Cria ou solicita o processamento de um recurso a partir da representação no *Body* do *Request* | ✘ | ✘ | ✘ | 
`PUT`    | Cria ou substitui um recurso a partir da representação encaminhada no *Body* do *Request*       | ✘ | ✔ | ✘ | 
`PATCH`  | Cria ou substitui um recurso a partir da representação encaminhada no *Body* do *Request*       | ✘ | ✔ | ✘ | 
`DELETE` | Solicita a remoção de um recurso no servidor de origem                                          | ✘ | ✔ | ✘ | 


O método **GET** deve ser usado apenas para recuperar representações de recursos – não atualizar/excluir um recurso no servidor o que torna o método *seguro* e *cacheável*.

Os métodos **POST**, **PUT** e **DELETE** devem ser direcionadas para operações *inseguras*, ou seja, operações como atualizar/excluir o recurso no servidor e, portanto, devem ser usados com cautela.