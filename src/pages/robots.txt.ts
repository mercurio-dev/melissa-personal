import type { APIRoute } from 'astro';
import { isIndexable, site } from '@/data/site';
export const GET: APIRoute = () => new Response(
  isIndexable ? `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap-index.xml\n` : 'User-agent: *\nDisallow: /\n',
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
