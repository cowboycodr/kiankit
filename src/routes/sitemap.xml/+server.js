import { text } from '@sveltejs/kit';

export const GET = async (event) => {
    const { url } = event;

    const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${url.origin}</loc>
        <lastmod>2024-05-13</lastmod>
    </url>
</urlset>
    `.trim();

    return text(sitemap)
}