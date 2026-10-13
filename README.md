# Melissa Amaral

Base Astro estática para o site profissional de Melissa Amaral.
Esta etapa contém somente a estrutura e uma página provisória. A landing page aprovada será implementada em PR separado.

## Desenvolvimento

Node 22.12+ (linha 22) e npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

## Estrutura

- `src/pages`: rotas Astro.
- `src/layouts`: documento HTML e metadados compartilhados.
- `src/components`: componentes Astro com CSS local.
- `src/styles`: estilos globais e tokens.
- `public`: arquivos estáticos.

Segue a separação usada em `will-amaral/personal-website`, sem adicionar router cliente ou framework JavaScript para uma landing page estática.

## Netlify

Importar o repositório e selecionar `main` como branch de produção.
O `netlify.toml` define o comando `npm run check && npm run build`, a pasta `dist` e Node 22. Não é necessário adapter para esta saída estática.
Manter Deploy Previews habilitados para pull requests no painel Netlify. A integração gera uma URL por PR depois que o repositório estiver conectado.
Não são necessários tokens Netlify no GitHub Actions: a integração Git do Netlify cuida dos deploys, e o workflow apenas valida o projeto.

Documentação: https://docs.astro.build/en/guides/deploy/netlify/ e https://docs.netlify.com/deploy/deploy-types/deploy-previews/.

## Próxima etapa

Implementar o protótipo aprovado: versão anterior à exploração clara, com azul profundo, coral, areia e verde-água; hero em coluna única com imagem suave e overlay; iconografia nas seções. Validar a implementação pela URL do PR antes de merge.

Antes do lançamento: inserir fotos e WhatsApp definitivos, confirmar dados de atendimento e domínio, configurar canonical/sitemap e liberar indexação somente em produção. Por enquanto, todas as páginas têm `noindex` e `robots.txt` bloqueia indexação intencionalmente.
