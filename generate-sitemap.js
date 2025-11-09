// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const siteUrl = 'https://www.shrideepmalafilms.com';

// ✅ Only main pages (no business sections)
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.9 },
  { url: '/upcoming', changefreq: 'monthly', priority: 0.8 },
  { url: '/future', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.9 },
  { url: '/talent', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

// ✅ Create a sitemap stream
const sitemapStream = new SitemapStream({ hostname: siteUrl });

// ✅ Write each link individually
for (const link of links) {
  sitemapStream.write(link);
}

// ✅ End the stream
sitemapStream.end();

// ✅ Save the file to /public/sitemap.xml
const writeStream = createWriteStream('./public/sitemap.xml');
sitemapStream.pipe(writeStream);

// ✅ Log completion
streamToPromise(sitemapStream)
  .then(() => {
    console.log('✅ Sitemap successfully generated in public/sitemap.xml');
  })
  .catch((err) => {
    console.error('❌ Error generating sitemap:', err);
  });
