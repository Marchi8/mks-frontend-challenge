Diretrizes do desafio
===========================

O objetivo principal desse teste é avaliar sua capacidade de escrever código limpo, bem testado e reutilizável. Ao terminar, faça o deploy da aplicação e mande-nos o link.

Tarefa (funcional)
---------------

Para esse desafio, você deve consumir nossa [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

A aplicação deve conter apenas uma página/rota e um carrinho.

- <b>Loja</b>: A lista de produtos deve ser buscada de nossa API, use um shimmer/skeleton enquanto estiver em loading.
 
- <b>Carrinho</b>: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Use do Jest e a testing-library para realizar os testes unitários.

Recursos
---------------

Notion utilizado para organizar as tarefas: [Desafio Front End MKS](https://garnet-airplane-d78.notion.site/0e5ea3f8d762425883a9a30d8c1e155a?v=c7ec2865453a444da9fe8940a56d2c89)

UI/UX: [Figma loja](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1) PS: O design system está incluso, incluindo a fonte.

API: [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

Ferramentas utilizadas
---------------

1. TypeScript
2. Next.js
3. Redux toolkit
4. Styled-components
5. Jest
6. React-Icons
7. Vercel
8. Figma
9. Notion
10. Axios

# Como testar a aplicação:

1. Faça o clone do repositório;
```shell
git clone url 
```

2. Instale as dependências necessárias:
```shell
yarn 
```

3. Rode os testes:
```shell
yarn test
```

# Como utilizar a aplicação localmente:

1. Faça o clone do repositório;
```shell
git clone url 
```

2. Instale as dependências necessárias:
```shell
yarn 
```

3. Inicie a aplicação:
```shell
yarn dev
```