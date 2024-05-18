import { text } from '@sveltejs/kit';

export const GET = async (event) => {
	const { url } = event;
	const currentDate = new Date().toISOString().split('T')[0];

	const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${url.origin}</loc>
        <lastmod>${currentDate}</lastmod>
        <loc>${url.origin}/auth/login</loc>
        <lastmod>${currentDate}</lastmod>
        <loc>${url.origin}/auth/signup</loc>
        <lastmod>${currentDate}</lastmod>
    </url>
</urlset>
    `.trim();

	return text(sitemap);
};
