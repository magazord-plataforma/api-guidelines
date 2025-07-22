---
title: Nomenclatura
---

## Campos

Todo identificador de campo, seja em mensagem de `Requisição/Resposta` ou `Parâmetro de Query` ou `Template de Query` **DEVE** em `letras minúsculas`.

O idioma a ser utilizado pela representação dos campos deve ser definido no momento da especificação da API. Se escolhido `português` ou `inglês` vai depender do contexto da aplicação.

> Uma vez definido o idioma, esse **DEVE** se manter constante por todos os endpoints da API.

O `camelCase` **DEVE** ser utilizado para representar palavras compostas. A API Não **DEVE** utilizar o símbolo `_` no nome de campos, exceto quando o seu uso se destina a palavras reservadas.

## URL

Toda URL **DEVE** seguir a regra de definição de Campos, com exceção do `camelCase`. Em vez disso, um hífen (`-`) **DEVE** ser usado para delimitar palavras combinadas (kebab-case).

Substantivos no plural **DEVEM** ser usados no URI quando apropriado para identificar coleções de recursos de dados (por exemplo, `/orders`, `/products`).

| ✔ Bom                                  | ✘ Ruim                              | Justificativa                                                 |
|----------------------------------------|-----------------------------------| --------------------------------------------------------------|
| /api/v1/magazines                      | /magazine                         | Coleções devem ser identificadas como substantivos no plural  |
| /api/v1/magazines?year=2025&sort=desc  | /magazines/2025/desc              | A definição de `filtros` deve ser feita como query parameters |
| /api/v1/magazines/1234                 | /magazine/1234                    | Coleções devem ser identificadas como substantivos no plural  |
| /api/v1/magazines/1234/articles        | /magazine/1234/articles/create    | A operação sobre o recurso deve ser mapeada pelo verbo HTTP   |


## Headers

Todo cabeçalho HTTP deve estar em `lowercase` e um cabeçalho HTTP personalizado **DEVE** começar com `x-`.

```
x-user-metadata-header: 42
```