---
title: JSON
---

Qualquer mensagem baseada em JSON **DEVE** obedecer às seguintes regras:

1. Todos os nomes de campos JSON **DEVEM** seguir as [Convenções de Nomenclatura](/api-guidelines/manutencao/nomenclatura)
2. Os nomes de campos **DEVEM** ser caracteres alfanuméricos ASCII ou sublinhado (`_`)
3. Campos booleanos **NÃO DEVEM** ter valor `null`
4. Campos com valor `null` **DEVEM** ser omitidos
5. Arrays e objetos vazios **NÃO DEVEM** ser `null` (use `[]` ou `{}` em vez disso)
6. Os nomes de campos de arrays **DEVEM** ser plurais (por exemplo, `"produtos": []`)