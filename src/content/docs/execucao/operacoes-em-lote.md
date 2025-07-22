---
title: Operações em Lote
---

Uma API que processa vários recursos relacionados em lote **DEVE** usar um endpoint de nome `batch` acessado pelo método `POST` abaixo *ação* e *coleção* que está sendo manipulada.

O corpo da solicitação de processamento em lote deve conter a relação dos identificadores dos elemnetos a serem manipulados agrupados na chave `items`.

> A justificação do envolpe no grupo `items` é o de flexibilizar a entrada para a inclusão de campos adicionais caso assim ocorrer no futuro.

```json
POST /products/inactivate/batch
Content-Type: application/json

{
  "items": [
    {
      "id": 42
    },
    {
      "id": 2
    }
  ]
}
```

É fundamental que toda operação em lote seja **atômica**, ou seja, o servidor deve implementar mecanismos para garantir a operação bem sucedida de todos os items solicitados, descartando qualquer alteração em caso de falha parcial.

Operações em lote não atômicas são *fortemente desencorajadas*, pois trazem carga e confusão adicional, sendo difíceis de consumir, depurar, manter e evoluir ao longo do tempo.

> É possível dividir uma operação não atômica em várias operações atômicas. O custo de mais algumas chamadas acaba sendo compensado pelo design mais limpo, clareza e simplicidade de manutenção.