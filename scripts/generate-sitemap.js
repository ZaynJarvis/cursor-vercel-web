const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = process.env.SITE_URL || 'https://cursor-vercel-web.vercel.app';
const LOCALES = ['en', 'zh'];
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');
const LAST_MOD_DATE = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

// Generate sitemap XML content
function generateSitemapXML() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Add root URL
  xml += `  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${LAST_MOD_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;

  // Add URLs for each locale
  LOCALES.forEach(locale => {
    xml += `  <url>
    <loc>${SITE_URL}/${locale}</loc>
    <lastmod>${LAST_MOD_DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    ${LOCALES.map(altLocale => 
      `<xhtml:link rel="alternate" hreflang="${altLocale}" href="${SITE_URL}/${altLocale}"/>`
    ).join('\n    ')}
  </url>\n`;
  });

  xml += '</urlset>';
  return xml;
}

// Write sitemap to file
fs.writeFileSync(OUTPUT_FILE, generateSitemapXML());
console.log(`Sitemap generated at ${OUTPUT_FILE}`); 