import type { APIRoute } from 'astro';

const pages = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
];

const generateSiteMap = (pages: typeof pages) =>
  `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ url, changefreq, priority }) => {
         return `
       <url>
           <loc>${new URL(url, 'https://taras-smereka.com').href}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>${changefreq}</changefreq>
           <priority>${priority}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;

export const GET: APIRoute = () => {
  return new Response(generateSiteMap(pages), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
