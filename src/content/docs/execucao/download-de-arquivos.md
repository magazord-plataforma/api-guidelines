---
title: Download de Arquivos
---

O download de arquivos pode assumir diferentes comportamentos de acordo com o caso de uso de aplicação ou, ainda, pelo `Content-Type` definido no Header `Accept`, podendo esse ser `application/json` ou o mime type correspondente ao arquivo se previamente conhecido.

## application/json

A API **PODE** possibilitar o download de arquivos considerando o Content-Type `application/json` para cenários onde o resultado do retorno contém um conteúdo misto.

Para o cenário de conteúdo misto a API **DEVE** retornar o conteúdo do arquivo transformado em `base64`. Um resultado com conteúdo misto considera o conteúdo do próprio arquivo e informações contextuais adicionais.

Requisição GET

```
GET page/1423/details HTTP/1.1
Accept: application/json
```

Resposta HTTP

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "name": "Página de Produto XYZ",
  "content": "QSBBUEkgKipERVZFKiogcGV...=="
}
```

## application/octet-stream

A API **PODE** permitir o download do arquivo considerando o Content-Type `application/octet-stream` manipulando de maneira mais eficiente a representação binária do arquivo


Requisição GET

```
GET report/1423/download HTTP/1.1
```

Resposta HTTP

```
HTTP/1.1 200 OK
Content-Type: application/octet-stream
Content-Disposition: attachment; filename="report.pdf"

<</Length 77/Filter/FlateDecode/I 95/L 79/S 38>>stream65A038E813F4CB82B
x�b``�b``�dѻ
            ��  �Y8␦�Ÿ���A���sC�H��D��KL
                                        4�
<</Subtype/Type1/FontDescriptor 15 0
```

> Ao incluir a representação binária a API **DEVE** incluir o header Content-Disposition com o filename correspondente como *hint* para o consumidor