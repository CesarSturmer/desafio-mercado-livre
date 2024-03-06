<center><h1>Desafio Frontend Mercado livre</h1></center>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Sobre a API**

- ✅ Implementei usando a api do Next JS
- beneficions de usar:

  - ✅ Server-Side Rendering (SSR): O Next.js suporta renderização do lado do servidor, o que melhora a velocidade de carregamento das páginas, tornando a aplicação mais rápida e eficiente.
  - ✅ Client-Side Routing: Oferece um sistema de roteamento do lado do cliente que facilita a navegação entre páginas sem a necessidade de recarregar a página inteira, proporcionando uma experiência de usuário mais fluida.

**Sobre o FRONTEND**

- ✅ Implementei usando a útlima versão do NEXT e do REACT, aproveitando o máximo das funcionalidades server side, e isso pode se perceber na performance das péginas, dessa forma usando cache e revalidate. Para melhorar a performance optei por usar CSS nativamente, vendo que hoje por ser escrito em modules, garante que nao tenha problema de duplicidade ( resolvendo o problema que o SASS brilha ).

- ✅ Validação para resultado que tem buscas, mostrando mensagem de erros.
- ✅ Loading em todas as paginas.
- ✅ page not-found personalizada
- ✅ Request nativa usando o fetch
- ✅ Responsivo
