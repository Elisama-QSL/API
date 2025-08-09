# API de Transferências e Usuários

Esta API permite o registro, login, consulta de usuários e transferências de valores entre usuários, com regras de negócio para aprendizado de testes e automação de APIs.

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para seu ambiente.
2. Instale as dependências:
   ```
npm install express swagger-ui-express
   ```

## Estrutura de Diretórios
```
API/
  controller/
  model/
  service/
  app.js
  server.js
  swagger.json
  README.md
```

## Como rodar a API

1. Inicie o servidor:
   ```
node server.js
   ```
2. Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints

- `POST /register` — Registro de usuário
- `POST /login` — Login de usuário
- `GET /users` — Listar usuários
- `POST /transfer` — Realizar transferência
- `GET /transfers` — Listar transferências

Consulte detalhes de payloads e respostas na documentação Swagger.

## Regras de Negócio
- Login e senha obrigatórios para login.
- Não é permitido registrar usuários duplicados.
- Transferências para destinatários não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.
- O "banco de dados" é em memória (variáveis), reiniciado a cada execução.

## Testes
A API foi estruturada para facilitar testes automatizados, especialmente com Supertest, importando o `app.js` sem o método `listen()`.

---

Dúvidas? Abra uma issue ou entre em contato.
