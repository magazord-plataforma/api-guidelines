---
title: Operações em Lote
---

Uma ação processa vários recursos relacionados em lote **DEVE** usar um endpoint com o método correspondente e seu corpo deve conter uma representação da coleção com os identificadores dos itens que serão processados.

Em um cenário de desativação de múltiplos produtos, o método utilizado é `POST` (Indicando operação de processmento) e o corpo contém o campo coleção `products` onde cada item contém o `id` do registro a ser processado.

```json
POST /products/inactivate
Content-Type: application/json

{
  "products": [
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