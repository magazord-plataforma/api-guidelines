---
title: Webhooks
---

Um [Webhook](https://swagger.io/docs/specification/v3_0/callbacks/) pode ser definido como uma solicitação assícrona que o serviço enviará a outro serviço em resposta a determinados eventos.

Um exemplo típico de Webhook ocorre em *funcionalidades de assinatura* na qual usuários se *inscrevem* em determinado evento da API e recebem notificações na ocorrência desse mesmo evento.

## Assinatura

O usuário ou consumidor de API ao se inscrever em determinado tópico de assinatura **DEVE** fornecer as informações relacionadas a URL de *Callback*.

A API **PODE** disponibilizar uma coleção de nome `subscriptions` o qual receberá o recurso represetando a nova assinatura com o endereço de retorno.


Requisição POST

```
POST /subscriptions HTTP/1.1
Content-Type: application/json

{
    "topic": "orders:update_status",
    "callbackUrl": "https://clienteserver.com/send/callback/to/me"
}
```

A resposta **DEVE** retornar código **201** representando a criação da nova assinatura e incluir com o seu respectivo identificador para futuras operações pelo próprio cliente.

Resposta HTTP
```
HTTP/1.1 201 Created
Content-Type: application/json

{       
    "id": 4746
}
```

## Notificação

Ao disparar um novo *Evento* para o tópico relacionado a API **DEVE** enviar a notificação para a URL de *Callback* fornecida pelo consumidor no momento da configuração da assinatura.

O corpo da requisição deve incluir os dados de identificação da assinatura `subscrption` em conjunto das *chaves* representando os dados de interesse do evento que foi disparado.

Em um exemplo de notificação de alteração de situação de pedido, o corpo irá incluir a chave `subscription` com o `id` da assinatura e a chave `order` com as informações relevantes a alteração do pedido.

Requisição POST

```
POST https://clienteserver.com/send/callback/to/me HTTP/1.1

{       
    "subscription": {
        "id": 4746,
    },
    "order": {
        "id": 35689,
        "status": "approved",
        "client": {
            "id": "5321",
            "email": "luiz@magazord.com.br"
        }
    }
}
```

Resposta HTTP

```
HTTP/1.1 200 Ok
Content-Type: application/json
```

## Tratamento de Erros

Espera-se que o Consumidor da API ao receber a notificação Webhook relacionado a assinatura do evento encaminhe uma resposta com o Status Code 200

Porém, caso houver qualquer inconsistência que resulte em um código de erro na faixa de `4xx` ou `5xx`, a API deve tratar essa situção e aplicar estratégias de `retry` para garantir o envio e recebimento da notificação.

A API **DEVE** utilizar uma estratégia de [*backoff exponencial*](https://en.wikipedia.org/wiki/Exponential_backoff) quando identificado uma resposta com código de erro, reduzindo a frequência de repetição de envio a cada nova ocorrência de erro para o mesmo payload e url de destino.

| Número da Retentativas | Segundos de Espera Até a Próxima Tentaiva |
| -----------------------|-------------------------------------------|
| maior ou igual a 2     | 5 minutos                                 |
| maior ou igual a 4     | 10 minutos                                |
| maior ou igual a 6     | 15 minutos                                |
| maior ou igual a 8     | 60 minutos                                |
| maior ou igual a 10    | 120 minutos                               |

A API **DEVE** viabilizar um número máximo de retentativas de modo a interromper o fluxo de envio caso esse número ultrapassar o limite configurado.

## Autenticação de Mensagens

Em cenários onde ocorre a transmissão de dados sensíveis no payload de notificações a API **PODE** disponibilizar mecanismos que permitam realizar a verificação da autoria da mensagem de notificação por meio de um cabelaçalho de assinatura.

A API **PODE** incluir o cabeçalho *X-Zord-Signature-256* correspondendo ao resultado do *hash* da mensagem em conjunto a uma chave secreta disponibilizada pelo próprio consumidor no momento da configuração da assinatura.

```php
$headers['X-Zord-Signature-256'] = 'sha256=' . hash_hmac(
        'sha256', 
        $notificacaoEnvio->getMensagem(), 
        $secret
);
```

Ao receber o *callback* relacionado ao Webhook poderá realizar o mesmo calculo de *hash* no ambiente de sua aplicação e comparando o resultado obtido com o valor presente no cabeçalho da mensagem.

```javascript
const signature = request.headers['x-zord-signature-256'].replace('sha256=', '');
const computed = crypto.createHmac('sha256', secret).update(body).digest('hex');
console.log('> Hmac (' + (signature === computed ? "OK" : "Invalid") + ")")
```

    
## Cancelamento de Assinatura

Eventualmente o consumidor pode realizar o cancelamento da sua assinatura e com isso a API **DEVE** interromper o envio de eventos para o callback relacionado.

Requisição DELETE
```
DELETE /subscriptions/1 HTTP/1.1
```

Resposta HTTP
```
HTTP/1.1 204 Accepted
```

De modo a viabilizar esse caso de uso a API **DEVE** disponibilizar um endpoint *DELETE* para o recurso de assinatura de tópico de notificação.