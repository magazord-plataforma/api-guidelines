---
title: Segurança
---

## Autenticação

Nem todo usuário tem direito a todos os serviços web. É vital garantirmos que serviços administrativos não sejam mal utilizados, ou seja, que toda API seja autenticada antes de ser utilizada, podendo esta ser feita por: 

* **Cookie**: Especificado no Cookie `Session` definido como *HttpOnly* e *Secure* contendo o identificador da sessão estabelecida pela troca de credenciais `username` e `password`.
* **Token JWT**: Especifcada no Header `Authorization` pelo schema `Bearer` constituíta pelo Token JWT obtido pela troca de credenciais `username` e `password`.
* **Chave API**: Especificada no Header `Authorization` pelo schema `Basic` constituída pelo App Key (Token) e App Id (Senha) do cliente da requisição.


> Tokens **NÃO DEVEM** aparecer na URL pois esta pode ser capturada em logs do servidor web. Se o caso de uso exigir, o valor deve ser transportado como um [fragmento de URL](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment).


## Headers

Informações de versão do servidor **DEVEM** SER removidas/mascaradas dos cabeçalhos HTTP de modo a evitar qualquer tipo de ataque direcionado, já que as vulnerabilidades são, em sua maioria, específicas dos fornecedores.

```
Server: Apache/2.4.41
X-Powered-By: Express
```

Além disso, navegadores modernos suportam diversos cabeçalhos que podem melhorar a segurança, protegendo-as contra clickjacking, cross-site scripting e outros ataques comuns. 

Idealmente, uma API **DEVE** incluir Cabeçalhos de Segurança HTTP pelo menos nestas áreas, a menos que haja incompatibilidade com algum requisito funcional:

| Header                                   | Descrição                                                                                                   |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| HTTP Strict Transport Security           | Força o uso exclusivo de HTTPS, impedindo conexões via HTTP.                                                |
| Access-Control-Allow-Methods             | Define quais métodos HTTP são permitidos em requisições de origem cruzada.                                  |
| Access-Control-Allow-Headers             | Especifica quais cabeçalhos HTTP podem ser usados em requisições de origem cruzada.                         |
| Access-Control-Allow-Origin              | Define quais origens externas têm permissão para acessar o recurso.                                         |
| Access-Control-Max-Age                   | Especifica por quanto tempo o resultado de um *preflight* request fica cacheado no browser                  |



Essas definições podem ser feitas a nivel de *cloud provider*, ou ainda na propria aplicação em configuração no *framework* http utilizado ou por intermédio de bibliotecas *open source*.

* [NodeJS: Helmet](https://www.npmjs.com/package/helmet)


## Validação

É difícil realizar a maioria dos ataques se os únicos valores permitidos forem `true` ou `false`, ou um `number`, ou um dentre um pequeno número de valores aceitáveis em um `enum`. 

* A API **DEVE** utilizar Tipos Fortes para reduzir a área de ataque.
* A API **DEVE** remover qualquer código executável que possa ser encaminhado na requisição.

Mensagens representandas no formato JSON devem seguir as [Diretrizes Gerais](/api-guidelines/diretrizes-gerais/json) de representação e validadas por ferramentas orientadas a especificação [JSON Schema](https://json-schema.org/).

* [PHP](https://github.com/jsonrainbow/json-schema)
* [Javascript](https://www.npmjs.com/package/jsonschema)

> A API **DEVE** exigir o `Content-Type` no cabeçalho de qualquer requisição de POST, a API **NÂO DEVE** assumir o Tipo de Conteúdo e a sua ausência **DEVE** resultar em `406 Not Aceptable`.

## Dados em trânsito

O uso do TLS v1.2 **DEVE** ser obrigatório, especialmente ao realizar credenciais, atualizações, exclusões e quaisquer transações de valor. 

A sobrecarga do TLS é insignificante em hardware moderno, com um pequeno aumento de latência que é mais do que compensado pela segurança para o usuário final.