---
title: Regras de Extensão
---

Qualquer modificação em uma API existente **DEVE** evitar alterações significativas e **DEVE** manter a compatibilidade com versões anteriores de acordo com as *Regras para Extensão*:

1. Nenhum *Endpoint* ou *Parâmetro* deve ser removido.
2. Nenhum Campo *opcional* deve ser tornado *obrigatório*.
3. Qualquer Campo *adicionado* deve ser *opcional*.
4. *Endpoints* obsoletos devem ser removidos por *Depreciação*

> Estas regras abrangem também a renomeação e a alteração de identificadores URLs visto que estas devem ser estáveis ao longo do tempo, incluindo a sua semântica.

A inclusão ou alteração de funcionalidades em uma API **DEVE** seguir estratégias de [Versionamento](/api-guidelines/manutencao/versionamento) de modo a garantir a compatibilidade e não quebrar clientes existentes.