# Melissa Amaral

Landing page estática em Astro, implementando o protótipo aprovado: azul profundo, coral, areia e verde-água; hero com imagem e gradiente; avaliação, prescrição e acompanhamento; retrato real de Melissa.

## Desenvolvimento

Node 22.12+ e npm. Execute `npm ci`, `npm run dev`, `npm run check` e `npm run build`. Use `npm run preview` para inspecionar o resultado estático.

## Organização

- `src/pages`: rotas e robots.txt gerado no build.
- `src/layouts`: HTML, metadados e estrutura da página.
- `src/components`: seções da landing page e ícones.
- `src/data/site.ts`: identificação, URL canônica e contato.
- `src/styles/global.css`: tokens, layout responsivo e estados de interação.
- `src/images`: fotografias processadas pelo Astro em WebP responsivo.
- `src/icons`: somente os SVGs utilizados, da biblioteca Lucide, com licença ISC preservada.

HTML estático, sem framework cliente. Apenas o menu mobile usa JavaScript. A navegação continua disponível sem JavaScript. Imagem da hero carregada prioritariamente; retrato usa lazy loading e dimensões explícitas.

## Netlify e previews

Branch de produção: `main`. Build: `npm run check && npm run build`. Diretório: `dist`. Node 22 definido em `netlify.toml`. A integração Git do Netlify gera Deploy Previews para PRs; GitHub Actions valida o código sem tokens Netlify.

### Configuração de lançamento

Nenhuma variável é necessária para renderizar o site. Duas variáveis opcionais são reconhecidas em build:

- `PUBLIC_WHATSAPP_NUMBER`: número real, com código do país, somente dígitos. Quando ausente, o contato mostra "Agendamento em breve", sem link fictício. Valores malformados interrompem o build.
- `PUBLIC_ENABLE_INDEXING=true`: libera indexação apenas quando `CONTEXT=production` (definido pelo Netlify). Previews, builds locais e 404 permanecem `noindex`. Enquanto não habilitada, robots.txt também bloqueia rastreamento.

Depois de alterar as variáveis, faça novo deploy. Ao usar domínio próprio, atualize `site` em `astro.config.mjs` e `site.url` em `src/data/site.ts` juntos. Canonical e Open Graph apontam para a URL de produção; sitemap é gerado automaticamente. Dados estruturados usam Person, sem inventar endereço, avaliações ou credenciais.

## Imagens

Retrato: fotografia fornecida pelo responsável pelo projeto, otimizada para WebP. Imagem social derivada do mesmo retrato. Hero: foto provisória utilizada no protótipo, via https://images.unsplash.com/photo-1517836357463-d25dfeac3438. Confirmar a imagem definitiva antes do lançamento.

## Revisão antes do merge

Validar o Deploy Preview em desktop e celular, conferir o retrato e os textos e informar o número real do WhatsApp. A implementação não foi mesclada automaticamente.
