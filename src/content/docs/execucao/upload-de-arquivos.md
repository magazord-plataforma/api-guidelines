---
title: Upload de Arquivos
---

O carregamento de arquivos pode assumir diferentes comportamentos de acordo com seu `Content-Type` podendo ele ser do tipo `multipart/form-data` ou `application/json`.

## multipart/form-data

A API **DEVE** permitir o caso de uso de carregamento de arquivos considerando o Content-Type `multipart/form-data`. O seu uso permite uma manipulação eficiente de dados binárias sendo utilizado interfaces de formulário.

```
<form action="/users/profile" method="post" enctype="multipart/form-data">
  Name: <input type="text" name="name"><br>
  File: <input type="file" name="picture"><br>
  <input type="submit" value="Submit">
</form>
```

A sua operação pode ser replicada em linha de comando pelo cliente CURL qual simplifica a definição do Content-Type aplicando-a automaticamente quando utilizado a flag `--form`

```bash
$ curl -F name=anonymous -F picture=@profile.jpeg https://dev.magazord.com.br/users/profile
```

Ou ainda por linguagem de programação considerando uma implementação para NodeJS


```javascript

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('picture', fs.createReadStream('profile.jpeg'));

axios.post('https://dev.magazord.com.br/users/profile', form, {
  headers: form.getHeaders(),
}).then(res => {
  console.log(res.data);
}).catch(err => {
  console.error(err);
});
```

> A apicação do construtor FormData realiza o preenchimento dos headers necessários para a transmissão do `multipart/form-data`.

## application/json

A API **DEVE** permitir o caso de uso de carregamento de arquivos considerando o Content-Type `application/json`. O seu uso deve viabilizado de modo a compatibilizar com integradores com restrição que impeça o uso do `multipart/form-data`.

O conteúdo em JSON representando o carregamento do arquivo deve incluir o campo do próprio arquivo codificado em `base64` bem como o `nome do arquivo` a ser registrado no processo de upload.

```bash
$ curl -X POST https://dev.magazord.com.br/users/profile -H "Content-Type: application/json" -d
'{
  "filename": "profile.png",
  "picture": "QSBBUEkgKipERVZFKiogcGV...=="
}'
```

> No formato `multipart/form-data` o nome do arquivo está contido nos `metadados` do arquivo carregado, em JSON é necessário especificar diretamente o nome do arquivo já que seus metadados não são incluídos no upload.


```javascript
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const fileBuffer = fs.readFileSync(path.join(__dirname, 'profile.jpeg'));
const pictureBase64 = fileBuffer.toString('base64');

axios.post('https://dev.magazord.com.br/users/profile', JSON.stringify({
    filename,
    picture: pictureBase64
}), {
    headers: {
       'Content-Type': "application/json"
    }
})
.then(response => {
    console.log(response.data)
})
.catch(err => {
    console.log(err)
});
```