---
title: Remoção Gradual
---

Uma versão ou método de endpoint mais antiga **PODE** ser descontinuada e eventualmente removida, desde que os clientes tenham tempo suficiente para se adaptarem à mudança.

> A possibilidade de descontinuação e remoção completa de um recurso ou ação depende da natureza da API e da importância das integrações existentes.

Se um endpoint puder ser descontinuado esse **DEVE** seguir um fluxo de **Remoção Gradual**, conforme especificado nestas diretrizes, de modo a nunca interromper os clientes existentes.

| **Título**                               | **Descrição**                                                                                                       |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| **1. Marcar como depreciada**            | A API **DEVE** marcar Endpoint como depreciado na documentação e incluir o cabeçalho [HTTP Sunset](https://datatracker.ietf.org/doc/html/rfc8594) com o timestamp em que o recurso ficará indisponível. |
| **2. Informar os usuários**              | A API **DEVE** notificar usuários pelos meios possíveis sobre a depreciação e orientar sobre alternativas a funcionalidade que está sendo removida.                             |
| **3. Remover documentação**              | Eventualmente, a parte da documentação da API que descreve a interface obsoleta **PODE** ser removida ou ocultada para impedir que novos usuários usem os recursos ou ações obsoletos. |
| **4. Aviso Final**                       | Após um período de carência suficiente, um aviso final de descontinuação **DEVE** ser emitido.                         |
| **5. Remover a interface depreciada**    | Quando não houver usuários utilizando a interface obsoleta, a interface **PODE** ser desativada.                       |

> Um recurso ou ação obsoleto **NÃO DEVE** ser removido se houver integrações existentes que o utilizem. Com base na natureza do caminho de migração, um redirecionamento para uma nova versão **DEVE** ser fornecido.
