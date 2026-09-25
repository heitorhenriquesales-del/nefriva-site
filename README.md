# NEFRIVA — landing page

Projeto completo e independente, preparado para GitHub e Vercel. Inclui a landing page, duas páginas de produtos, três logos oficiais, estilos, animações e código-fonte organizado. Sem backend, chaves de API ou dependências de execução do ChatGPT.

## Publicar pelo GitHub na Vercel

1. Descompacte o ZIP.
2. Crie um repositório no GitHub e envie todo o conteúdo extraído. Os arquivos `package.json` e `vercel.json` devem ficar na raiz do repositório, ao lado das pastas `src` e `dist`. Não envie somente o ZIP.
3. Na Vercel, crie um projeto importando esse repositório.
4. Use a raiz do repositório como Root Directory. A configuração incluída define Framework Preset `Other`, Build Command `npm run build` e Output Directory `dist`.
5. Publique o projeto. Não são necessárias variáveis de ambiente.

Referência da configuração: https://vercel.com/docs/project-configuration/vercel-json

## Estrutura

- `src/components/`: componentes das seções e elementos compartilhados.
- `src/build.mjs`: monta as páginas HTML a partir dos componentes.
- `src/check.mjs`: verifica links internos, estrutura e integridade das logos.
- `src/logo-hashes.json`: hashes SHA-256 das três logos originais.
- `dist/index.html`: landing page.
- `dist/minha-dialise/index.html`: página do Minha Diálise.
- `dist/renal-food/index.html`: página do Renal Food.
- `dist/404.html`: página não encontrada.
- `dist/assets/`: logos originais, CSS e JavaScript.
- `vercel.json`: configuração de publicação.
- `package.json` e `package-lock.json`: comandos e metadados.

Mantenha a pasta `dist` no GitHub: ela contém imagens, CSS e JavaScript. O build gera o HTML sem apagar esses assets.

## Editar e verificar

Com Node.js 18 ou superior, execute na pasta do projeto:

```sh
npm run build
npm run check
```

Não há pacotes externos para instalar. Para visualizar localmente, sirva `dist` com um servidor estático. Se tiver Python 3:

```sh
python3 -m http.server 8000 --directory dist
```

Abra http://localhost:8000. Abrir o HTML por duplo clique não reproduz os caminhos absolutos usados na hospedagem.

Textos: `src/components/`. Estilos: `dist/assets/styles.css`. Menu e animações: `dist/assets/main.js`. Depois de editar componentes, execute o build novamente.

## Conteúdo futuro

Os blocos `.product-visual` na home e `[data-screenshot-slot]` nas páginas dos produtos estão preparados para screenshots reais. Não foram incluídas telas fictícias. Informações dos produtos ficam em `src/components/products.mjs`.

## Revisão

Build e links/rotas verificados. Logos preservadas byte a byte. Inclui HTML semântico, SEO básico, layout responsivo, menu com estado ARIA e suporte a movimento reduzido. Manrope usa Google Fonts com fallback local. A inspeção visual interativa em navegador e a publicação em uma conta Vercel não foram realizadas neste ambiente.
