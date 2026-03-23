# Como fazer seu site aparecer no Google

## 1) Publicar as mudancas de SEO
Suba para producao os arquivos alterados:
- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## 2) Cadastrar no Google Search Console
1. Acesse: https://search.google.com/search-console
2. Clique em **Adicionar propriedade**.
3. Escolha **Prefixo de URL** e use `https://diegoneresdev.com.br/`.
4. Verifique o dominio.

Opcao mais simples no Vite:
1. No Search Console, escolha verificacao por **Tag HTML**.
2. Copie o valor de `content`.
3. Adicione no `<head>` do `index.html`:

```html
<meta name="google-site-verification" content="SEU_CODIGO_AQUI" />
```

## 3) Enviar sitemap
No Search Console:
1. Entre em **Sitemaps**.
2. Envie: `sitemap.xml`.

URL final esperada:
- `https://diegoneresdev.com.br/sitemap.xml`

## 4) Solicitar indexacao da home
1. Use a barra superior do Search Console.
2. Teste a URL `https://diegoneresdev.com.br/`.
3. Clique em **Solicitar indexacao**.

## 5) Conferir arquivos publicos
Valide no navegador:
- `https://diegoneresdev.com.br/robots.txt`
- `https://diegoneresdev.com.br/sitemap.xml`

## 6) Ganhar relevancia para buscas sem dominio exato
- Preencha links reais de GitHub e LinkedIn no portfolio.
- Mantenha projetos publicados com descricao tecnica e stack.
- Atualize o site com frequencia (Google reavalia mais rapido).
- Consiga links apontando para seu dominio (LinkedIn, GitHub, redes, comunidades).

## 7) Ajuste obrigatorio no seu perfil LinkedIn
No arquivo `src/data/portfolioData.js`, troque:
- `linkedin: "https://www.linkedin.com/"`

Por seu perfil real, por exemplo:
- `linkedin: "https://www.linkedin.com/in/seu-usuario/"`

Sem URL real do LinkedIn, o Google recebe um sinal fraco para associar seu nome ao perfil.

## Observacao importante
Mesmo com tudo correto, o Google pode levar de alguns dias ate algumas semanas para melhorar posicionamento em buscas genericas.
