import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'http://localhost:3000/sitemap.xml' });

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  // Add more routes as needed
];

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then((data) =>
  createWriteStream('./dist/ssr/client/sitemap.xml').end(data),
);
