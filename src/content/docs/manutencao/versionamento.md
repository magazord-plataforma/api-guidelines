---
title: Versionamento
---

O versionamento deve ser aplicado de modo a tornar uma API estável enquanto ao mesmo tempo tornando-a capaz de incorporar novas funcionalidades. 

> Qualquer alteração em uma API **NÃO DEVE** quebrar clientes existentes. 

A API **DEVE** utilizar a estratégia de versionamento como PATH na própria URL, onde é definido um `número` de versão prefixado com a letra `v`:

* /`v1`/products
* /`v2`/orders

> A sua maior vantagem de aplicação está na facilidade de identificação, bem como a sua integração com estrutura nativas de Cache disponibilizadas pelo próprio Browser.

Se houverem situações onde uma alteração não possa seguir as [**Regras de Extensão**](/api-guidelines/diretrizes-gerais/regras-de-extensao), uma nova versão do endpoint deve ser disponibilizada de modo a manter a compatibilidade com a versão anterior.
