# Tasks API

Uma API para gerenciar tarefas, desenvolvida com Node.js, TypeScript, MongoDB, e utilizando autenticação JWT.

## Table of contents

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#tuncionalidades)
- [Instalação](#instalação)
- [Endpoints](#endpoints)
- [Licença](#licença)

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Yup (validação de esquemas)
- Eslint (análise estática de código)
- Dotenv (variáveis de ambiente)
- CORS

## Funcionalidades

- Registro de usuário
- Login de usuário
- Usuário logado
- CRUD de tarefas (Create, Read, Update, Delete)

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/tarefas-api.git
cd tarefas-api
```

2. Instale as dependências:

```
npm install
```

3. Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto:

```
MONGODB_URI=<sua-uri-do-mongodb>
JWT_SECRET=<seu-segredo-jwt>
```

4. Inicie o servidor:

```
npm run dev
```

## Endpoints

### Registrar Usuário

URL: /api/register  
Método: POST

### Login de Usuário

URL: /api/login  
Método: POST

### Retornar Usuário

URL: /api/user  
Método: PUT  
Headers: Authorization: Bearer 'token'

### Criar tarefa

URL: /api/tasks  
Método: POST  
Headers: Authorization: Bearer 'token'

### Listar tarefa

URL: /api/tasks  
Método: GET  
Headers: Authorization: Bearer 'token'

### Obter tarefa por ID

URL: /api/tasks/:id  
Método: GET  
Headers: Authorization: Bearer 'token'

### Atualizar tarefa por ID

URL: /api/tasks/:id  
Método: PUT  
Headers: Authorization: Bearer 'token'

### Delatar tarefa por ID

URL: /api/tasks/:id  
Método: DELETE  
Headers: Authorization: Bearer 'token'

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
